"use client"

import { useEffect, useState } from 'react'
import Window from '@/components/Window'
import { Application, ShortUser, User } from '@/types/types'
import { ETHNICITY_OPTIONS, LOGO_SIZE, MAJORS_OPTIONS, STATE_OPTIONS } from '../const'
import PhoneInput from 'react-phone-number-input/input'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import WindowsButton from '@/components/WindowsButton'
import FolderImage from '@/public/apply/directory_explorer.png'
import ApplicationImage from '@/public/apply/signature.png'
import StowBar from '@/components/StowBar'
import Link from 'next/link'

type FormData = {
  userId: string
  firstName: string
  lastName: string
  gender: string
  pronouns: string
  age: string
  ethnicity: string
  gradYear: string
  phoneNumber: string
  email: string
  school: string
  city: string
  state: string
  country: string
  educationLevel: string
  major: string
  diet: string
  shirtSize: string
  sleep: boolean
  github: string
  linkedin: string
  portfolio: string
  whyBostonhacks: string
  resume: File | undefined
  agreeToTerms: boolean
  authorizeDataUse: boolean
  authorizeMLHEmail: boolean
}

const createApplicationData = (inputData: FormData) => {
  if (!inputData.resume) throw new Error("Resume file is required");

  const formData = new FormData();

  formData.append('applicationYear', new Date().getFullYear().toString());
  formData.append('userId', inputData.userId);
  formData.append('gender', inputData.gender);
  formData.append('pronouns', inputData.pronouns);
  formData.append('age', inputData.age);
  formData.append('ethnicity', inputData.ethnicity);
  formData.append('gradYear', inputData.gradYear);
  formData.append('phoneNumber', inputData.phoneNumber);
  formData.append('school', inputData.school);
  formData.append('city', inputData.city);
  formData.append('state', inputData.state);
  formData.append('country', inputData.country);
  formData.append('educationLevel', inputData.educationLevel);
  formData.append('major', inputData.major);
  formData.append('diet', inputData.diet);
  formData.append('shirtSize', inputData.shirtSize);
  formData.append('sleep', inputData.sleep.toString());
  formData.append('github', inputData.github || "http://empty.empty");
  formData.append('linkedin', inputData.linkedin || "http://empty.empty");
  formData.append('portfolio', inputData.portfolio || "http://empty.empty");
  formData.append('whyBostonhacks', inputData.whyBostonhacks);
  formData.append('resume', inputData.resume);
  formData.append('authorizeMLHEmail', inputData.authorizeMLHEmail.toString());

  return formData;
}



// this page uses a lot of components like input boxes and fieldsets.
// if you wish to reuse them, put them in separate components
const ApplyPage = () => {
  const [pageLoading, setPageLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [alreadySubmitted, setAlreadySubmitted] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    firstName: '',
    lastName: '',
    gender: '',
    pronouns: '',
    age: '',
    ethnicity: '',
    gradYear: '',
    phoneNumber: '',
    email: '', // this field purely for display, backend doesnt accept this field
    school: '',
    city: '',
    state: '',
    country: '',
    educationLevel: '',
    major: '',
    diet: '',
    shirtSize: '',
    sleep: false,
    github: '',
    linkedin: '',
    portfolio: '',
    whyBostonhacks: '',
    resume: undefined,
    agreeToTerms: false,
    authorizeDataUse: false,
    authorizeMLHEmail: false,
  });

  const [showApplyModal, setShowApplyModal] = useState(true)
  const [stowedWindows, setStowedWindows] = useState<Array<{
    id: string
    title: string
    onRestore: () => void
  }>>([])

  const handleApplyStow = () => {
    setShowApplyModal(false)
    setStowedWindows(prev => [
      ...prev.filter(w => w.id !== 'apply'),
      {
        id: 'apply',
        title: 'Apply',
        onRestore: () => {
          setShowApplyModal(true)
          setStowedWindows(prev => prev.filter(w => w.id !== 'apply'))
        }
      }
    ])
  }

  const handleStowRemove = (id: string) => {
    setStowedWindows(prev => prev.filter(w => w.id !== id))
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
          credentials: 'include'
        })

        if (!response.ok) {
          router.push('/login')
          return
        }

        const shortUserData: ShortUser = await response.json()
        const userDataResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user?id=${shortUserData.id}&include=true`,
          {
            credentials: 'include'
          }
        );

        if (!userDataResponse.ok) {
          throw new Error('Failed to fetch applications');
        }

        const userData: User = await userDataResponse.json();
        const applications: Application[] = userData.applications || [];

        // check if user has already applied for current year
        // this is checked serverside but done here to keep user from filling out form again
        const currentYear = new Date().getFullYear();
        const hasApplied = applications.some((app: Application) => app.applicationYear === currentYear);

        if (hasApplied) {
          setError("You have already submitted an application for this year. If you believe this is an error, please contact us.");
          setAlreadySubmitted(true);
          return
        }
        setFormData(prev => ({ ...prev, email: userData.email, userId: userData.id }))
      } catch (error) {
        console.error('Error checking authentication:', error)
        setError("There was an error processing your request. Please try again later.");
        return
      } finally {
        setPageLoading(false)
      }
    }

    checkAuth()
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || undefined
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // update user first, then create application
    try {
      setLoading(true);
      const userUpdateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${formData.userId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
        })
      }
      );

      if (!userUpdateResponse.ok) {
        setError("There was an error updating your user information. Please try again.");
        return;
      }

      const applicationCreateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/application`, {
        method: 'POST',
        credentials: 'include',
        body: createApplicationData(formData)
      });

      if (!applicationCreateResponse.ok) {
        const errorData = await applicationCreateResponse.json().catch(() => null);

        if (errorData?.error && Array.isArray(errorData.error)) {
          const errorMessages = errorData.error
            .map((error: { message: string }) => error.message || '')
            .join(', ');
          setError(`Application submission failed: ${errorMessages}`);
        } else {
          setError("There was an error submitting your application. Please try again or contact us.");
        }
        return;
      }

      setSubmissionSuccess(true);

    } catch (error) {
      console.error('Error submitting application:', error);
      setError("There was an error submitting your application. Please try again or contact us.");
    } finally {
      setLoading(false);
    }


  }

  const inputClass = `
    border-2 border-t-gray-800 border-l-gray-800 border-r-white border-b-white
    bg-white px-2 py-1 text-sm font-mssansserif
    focus:outline-none focus:border-blue-500 
    w-full 
  `

  const selectClass = `
    border-2 border-t-gray-800 border-l-gray-800 border-r-white border-b-white
    bg-white px-2 py-1 text-sm font-mssansserif
    focus:outline-none focus:border-blue-500 w-full 
  `

  const buttonClass = `
    bg-ms-gray border-2 border-t-white border-l-white border-r-black border-b-black
    px-4 py-1 text-sm font-mssansserif font-bold
    hover:bg-gray-200 active:bg-gray-500
    active:border-t-black active:border-l-black active:border-r-white active:border-b-white
  `

  const labelClass = "block text-sm font-bold mb-1 font-mssansserif"

  const fieldsetClass = `
    border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white
    p-3 mb-4 bg-ms-gray
  `

  const legendClass = "bg-ms-gray px-2 text-sm font-bold font-mssansserif"

  const linkClass = "text-blue-800 underline hover:text-blue-800"

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircularProgress />
      </div>
    )
  }

  if (submissionSuccess || alreadySubmitted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center z-100">
        <Window
          title="Success"
          initialSize={{ width: 400, height: 250 }}
          closable={false}
        >
          <div className="flex flex-col p-4 items-center">
            <div className="text-green-700 text-lg font-bold mb-4 text-center font-mssansserif">
              Application Submitted Successfully!
            </div>
            <div className="text-sm mb-4 text-center font-mssansserif">
              Thank you for applying to BostonHacks! We&apos;ve received your application and will review it soon.
              <br />
              <br />
              If you have any questions, feel free to reach out to us at <a href="mailto:contact@bostonhacks.org">contact@bostonhacks.org</a>
            </div>
            <Link href="/login">
              <WindowsButton className="hover:cursor-pointer w-full p-1">
                Return to login
              </WindowsButton>
            </Link>
          </div>
        </Window>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center z-100">
        <Window
          title="Error"
          initialSize={{ width: 300, height: 230 }}
          closable={true}
          onClose={() => {
            setError(null)
          }}
        >
          <div className="flex flex-col p-4">
            <div className="text-red-700 text-sm">
              {error}
              <br />
              <br />
              If you need assistance, please contact us at <a href="mailto:contact@bostonhacks.org">contact@bostonhacks.org</a>
            </div>
          </div>

        </Window >
      </div >
    )
  }

  return (
    <div className="min-h-screen p-2 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-row w-full p-4 justify-between items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={LOGO_SIZE.width}
            height={LOGO_SIZE.height}
            className="cursor-pointer"
          />
        </Link>
        <div className="max-w-[60%] bg-ms-gray border-2 border-t-white border-l-white border-r-black border-b-black px-3 py-1">
          <p className="text-xs font-mssansserif text-black">
            Have any questions or issues? Contact us at{' '}
            <a
              href="mailto:contact@bostonhacks.org"
              className="text-blue-600 underline hover:text-blue-800"
            >
              contact@bostonhacks.org
            </a>
          </p>
        </div>

      </div>

      {showApplyModal && (
        <>
          {/* mobile view */}
          <div className="md:hidden">
            <div className="pt-10 px-4 pb-4">
              <div className="bg-ms-gray border-2 border-t-white border-l-white border-r-black border-b-black p-4 rounded">
                <h1 className="text-xl font-bold font-mssansserif mb-4 text-center">BostonHacks Application</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Personal Information</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>First Name:</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name:</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Gender:</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Pronouns:</label>
                        <input
                          type="text"
                          name="pronouns"
                          value={formData.pronouns}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Age:</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className={inputClass}
                          min={1}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Ethnicity:</label>
                        <select
                          name="ethnicity"
                          value={formData.ethnicity}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Ethnicity</option>
                          {ETHNICITY_OPTIONS.map((option) => (
                            <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number (with country code):</label>
                        <PhoneInput
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e || '' }))}
                          className={inputClass}
                          defaultCountry="US"
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                          disabled
                        />
                      </div>

                    </div>
                  </fieldset>

                  {/* Location */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Location</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>City:</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>State:</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select State</option>
                          {STATE_OPTIONS.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass}>Country:</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Education */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Education</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>School:</label>
                        <input
                          type="text"
                          name="school"
                          value={formData.school}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Graduation Year:</label>
                        <input
                          type="number"
                          name="gradYear"
                          min={new Date().getFullYear()}
                          max={new Date().getFullYear() + 100}
                          value={formData.gradYear}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Education Level:</label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Level</option>
                          <option value="high-school">High School</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Major:</label>
                        <select
                          name="major"
                          value={formData.major}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, major: e.target.value }))
                          }}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Major</option>
                          {MAJORS_OPTIONS.map((major) => (
                            <option key={major} value={major}>{major}</option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Preferences */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Preferences</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Dietary Restrictions:</label>
                        <input
                          type="text"
                          name="diet"
                          value={formData.diet}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                          placeholder="None, Vegetarian, Vegan, etc."
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Shirt Size:</label>
                        <select
                          name="shirtSize"
                          value={formData.shirtSize}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Size</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                      <div>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="sleep"
                            checked={formData.sleep}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span className={labelClass.replace('block', 'inline')}>I plan to sleep at the venue</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  {/* Social Links */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Social Links (optional)</legend>
                    <div className="space-y-3">
                      <div>
                        <label className={labelClass}>GitHub:</label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>LinkedIn:</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Portfolio:</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Essay & Resume */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Application Materials</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Why do you want to attend BostonHacks?</label>
                        <textarea
                          name="whyBostonhacks"
                          value={formData.whyBostonhacks}
                          onChange={handleInputChange}
                          className={`${inputClass} w-full h-24 resize-none`}
                          required
                          placeholder="Tell us why you're excited about BostonHacks..."
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Resume (PDF):</label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            required
                            id="resume-upload"
                          />
                          <div className={`${buttonClass} w-full text-left flex items-center justify-between`}>
                            <span>{formData.resume ? formData.resume.name : 'Choose PDF file...'}</span>
                            <span className="text-xs"><Image alt="" src={FolderImage} /></span>
                          </div>
                        </div>
                        {formData.resume && (
                          <p className="text-xs mt-1 font-mssansserif text-green-700">
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  {/* Agreement Checkboxes */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Agreement Terms</legend>
                    <div className="mb-3 text-sm">We are currently in the process of partnering with MLH. The following 3 checkboxes are for this partnership. If we do not end up partnering with MLH, your information will not be shared</div>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                          required
                        />
                        <span className="text-sm font-mssansserif">
                          I have read and agree to the MLH Code of Conduct. (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md</a>).
                        </span>
                      </label>

                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="authorizeDataUse"
                          checked={formData.authorizeDataUse}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                          required
                        />
                        <span className="text-sm font-mssansserif">
                          I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md</a>).
                          I further agree to the terms of both the MLH Contest Terms and Conditions
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md">https://github.com/MLH/mlh-policies/blob/main/contest-terms.md</a>)
                          and the MLH Privacy Policy
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md</a>).
                        </span>
                      </label>

                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="authorizeMLHEmail"
                          checked={formData.authorizeMLHEmail}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                        />
                        <span className="text-sm font-mssansserif">
                          (Optional) I consent to the processing of my personal data for event registration, communication, and related purposes.
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className={`${buttonClass} px-8 py-2 flex items-center gap-2`}
                      disabled={loading}
                    >
                      {loading && <CircularProgress size={16} />}
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* desktop view */}
          <div className="hidden md:block">
            <Window
              title={
                <span className="flex flex-row gap-x-1">
                  <Image src={ApplicationImage} width={16} height={16} alt="Folder" />
                  BostonHacks Application
                </span>
              }
              initialSize={{ width: 800, height: 600 }}
              initialPosition={{ x: 100, y: 50 }}
              menuItems={['File', 'Edit', 'Help']}
              onClose={handleApplyStow}
            >
              <div className="h-full overflow-y-auto p-4 bg-ms-gray">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Personal Information</legend>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>First Name:</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name:</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Gender:</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Pronouns:</label>
                        <input
                          type="text"
                          name="pronouns"
                          value={formData.pronouns}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Age:</label>
                        <input
                          type="number"
                          name="age"
                          min={1}
                          value={formData.age}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Ethnicity:</label>
                        <select
                          name="ethnicity"
                          value={formData.ethnicity}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Ethnicity</option>
                          {ETHNICITY_OPTIONS.map((option) => (
                            <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number (with country code):</label>
                        <PhoneInput
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e || '' }))}
                          className={inputClass}
                          defaultCountry="US"
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                          disabled
                        />
                      </div>


                    </div>
                  </fieldset>

                  {/* Location */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Location</legend>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>City:</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>State:</label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select State</option>
                          {STATE_OPTIONS.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Country:</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Education */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Education</legend>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>School:</label>
                        <input
                          type="text"
                          name="school"
                          value={formData.school}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Graduation Year:</label>
                        <input
                          type="number"
                          name="gradYear"
                          min={new Date().getFullYear()}
                          max={new Date().getFullYear() + 100}
                          value={formData.gradYear}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Education Level:</label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Level</option>
                          <option value="high-school">High School</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Major:</label>
                        <select
                          name="major"
                          value={formData.major}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, major: e.target.value }))
                          }}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Major</option>
                          {MAJORS_OPTIONS.map((major) => (
                            <option key={major} value={major}>{major}</option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Preferences */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Preferences</legend>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Dietary Restrictions:</label>
                        <input
                          type="text"
                          name="diet"
                          value={formData.diet}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="None, Vegetarian, Vegan, etc."
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Shirt Size:</label>
                        <select
                          name="shirtSize"
                          value={formData.shirtSize}
                          onChange={handleInputChange}
                          className={selectClass}
                          required
                        >
                          <option value="">Select Size</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="sleep"
                            checked={formData.sleep}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span className={labelClass.replace('block', 'inline')}>I plan to sleep at the venue</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  {/* Social Links */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Social Links (optional)</legend>
                    <div className="space-y-3">
                      <div>
                        <label className={labelClass}>GitHub:</label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>LinkedIn:</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Portfolio:</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className={inputClass}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Essay & Resume */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Application Materials</legend>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Why do you want to attend BostonHacks?</label>
                        <textarea
                          name="whyBostonhacks"
                          value={formData.whyBostonhacks}
                          onChange={handleInputChange}
                          className={`${inputClass} w-full h-24 resize-none`}
                          required
                          placeholder="Tell us why you're excited about BostonHacks..."
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Resume (PDF):</label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            required
                            id="resume-upload-desktop"
                          />
                          <div className={`${buttonClass} w-full text-left flex items-center justify-between`}>
                            <span>{formData.resume ? formData.resume.name : 'Choose PDF file...'}</span>
                            <span className="text-xs"><Image src={FolderImage} alt="" /></span>
                          </div>
                        </div>
                        {formData.resume && (
                          <p className="text-xs mt-1 font-mssansserif text-green-700">
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  {/* Agreement checkboxes */}
                  <fieldset className={fieldsetClass}>
                    <legend className={legendClass}>Agreement Terms</legend>
                    <div className="mb-3 text-sm">We are currently in the process of partnering with MLH. The following 3 checkboxes are for this partnership. If we do not end up partnering with MLH, your information will not be shared</div>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                          required
                        />
                        <span className="text-sm font-mssansserif">
                          I have read and agree to the MLH Code of Conduct. (<a target="_blank" rel="noopener noreferrer" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md</a>).
                        </span>
                      </label>

                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="authorizeDataUse"
                          checked={formData.authorizeDataUse}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                          required
                        />
                        <span className="text-sm font-mssansserif">
                          I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md</a>).
                          I further agree to the terms of both the MLH Contest Terms and Conditions
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md">https://github.com/MLH/mlh-policies/blob/main/contest-terms.md</a>)
                          and the MLH Privacy Policy
                          (<a target="_blank" rel="noopener" className={linkClass} href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md">https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md</a>).
                        </span>
                      </label>

                      <label className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          name="authorizeMLHEmail"
                          checked={formData.authorizeMLHEmail}
                          onChange={handleInputChange}
                          className="mt-1 flex-shrink-0"
                        />
                        <span className="text-sm font-mssansserif">
                          (Optional) I consent to the processing of my personal data for event registration, communication, and related purposes.
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className={`${buttonClass} px-8 py-2 flex items-center gap-2`}
                      disabled={loading}
                    >
                      {loading && <CircularProgress size={16} />}
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </Window>
          </div>

        </>
      )
      }

      <StowBar
        stowedWindows={stowedWindows}
        onRemove={handleStowRemove}
      />


    </div >
  );
}

export default ApplyPage
