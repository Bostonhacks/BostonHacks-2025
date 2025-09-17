"use client"
import { LOGO_SIZE } from "@/app/const"
import Background from "@/components/Background"
import Window from "@/components/Window"
import WindowsButton from "@/components/WindowsButton"
import Image from "next/image"
import Logo from "@/public/logo.svg"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Application, ShortUser, Status } from "@/types/types"
import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress'

const StatusPage = () => {
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [user, setUser] = useState<ShortUser | null>(null);

  useEffect(() => {
    const getApplicationStatus = async () => {
      try {
        const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, { credentials: 'include' });

        if (!userResponse.ok) {
          throw new Error("There was an error processing your request. Please try again later.");
        }

        const userData: ShortUser = await userResponse.json();
        setUser(userData);

        const applicationRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/application/user?user_id=${userData.id}`, { credentials: 'include' });

        if (!applicationRes.ok) {
          throw new Error("There was an error processing your request. Please try again later.");
        }
        const applications = await applicationRes.json();

        const currentApp = applications.find((app: Application) => app.applicationYear === new Date().getFullYear());

        if (!currentApp) {
          router.replace('/apply');
          return;
        }

        setApplication(currentApp);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    getApplicationStatus();
  }, [router])

  const handleStatusUpdate = async (newStatus: Status.CONFIRMED | Status.DECLINED) => {
    if (!application) return;

    setActionLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/application/${application.id}/confirmdeny`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("There was an error updating your status. Please try again later or contact us.");
      }

      const result = await response.json();
      if (result?.application?.status !== newStatus) {
        throw new Error("Failed to update status correctly. Please refresh the page or contact us.");
      }

      // Update the application status locally
      setApplication(prev => prev ? { ...prev, status: newStatus } : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setActionLoading(false);
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return { color: 'bg-green-600', icon: '✓', title: 'Application Accepted!', message: 'Congratulations! Your application has been accepted. Please confirm if you will be able to attend the event on October 11-12 at the GSU at Boston University.' };
      case 'pending':
        return { color: 'bg-yellow-600', icon: '⏳', title: 'Application Under Review', message: 'Your application is currently being reviewed. We will notify you once a decision has been made. If you are accepted, please come back to this page to confirm attendance.' };
      case 'waitlisted':
        return { color: 'bg-orange-600', icon: '⏸', title: 'Application Waitlisted', message: 'You have been placed on our waitlist. We will contact you if a spot becomes available.' };
      case 'rejected':
        return { color: 'bg-red-600', icon: '✗', title: 'Application Not Accepted', message: 'Unfortunately, your application was not accepted this time. Thank you for your interest.' };
      case 'confirmed':
        return { color: 'bg-blue-600', icon: '✓', title: 'Attendance Confirmed', message: 'Your attendance has been confirmed. You\'ll receive more information through email from contact@bostonhacks.org closer to the event date on October 11-12. We look forward to seeing you there!' };
      case 'declined':
        return { color: 'bg-gray-600', icon: '↩', title: 'Attendance Declined', message: 'You have declined your invitation. Thank you for letting us know.' };
      default:
        return { color: 'bg-gray-600', icon: '?', title: 'Application Status Unknown', message: 'We are unable to determine your application status at this time.' };
    }
  }

  return (
    <Background showCity={false} className="overflow-hidden">
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 overflow-hidden">

        <div className="absolute top-6 left-6">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={LOGO_SIZE.width}
              height={LOGO_SIZE.height}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Error Window */}
        {error && (
          <div className="fixed z-100">
            <Window
              title="Error"
              initialSize={{ width: 400, height: 250 }}
              initialPosition={{ x: -200, y: -100 }}
              closable={true}
              onClose={() => setError(null)}
            >
              <div className="p-2 w-full h-full">
                <div className="flex flex-col w-full h-full items-center space-y-4 p-5 bg-gray-200 border-black border-1">
                  <div className="text-red-700 text-sm text-center">
                    {error}
                    <br />
                    <br />
                    If you need assistance, please contact us at <a href="mailto:contact@bostonhacks.org" className="underline">contact@bostonhacks.org</a>
                  </div>
                  <WindowsButton className="text-xs px-2 py-1 mt-2" onClick={() => setError(null)} title="Close">
                    Close
                  </WindowsButton>
                </div>
              </div>
            </Window>
          </div>
        )}

        {/* Main Status Window */}
        <Window
          title={<>Application Status {user?.email && ` - ${user.email}`}</>}
          initialSize={{ width: 500, height: 500 }}
          closable={false}
          menuItems={["File", "Edit", "View", "Help"]}
          className="scale-75 md:scale-100"
        >
          <div className="p-2 w-full h-full">
            <div className="flex flex-col w-full h-full items-center space-y-6 p-5 bg-gray-200 border-black border-1">
              {loading ? (
                <>
                  <div className="p-2.5">
                    <div className="w-12 h-12 bg-blue-600 border-2 border-gray-400 flex items-center justify-center">
                      <CircularProgress size="1.5rem" color="inherit" sx={{ color: 'white' }} />
                    </div>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">Loading Application Status...</h2>
                  <p className="text-sm text-gray-600 text-center max-w-xs">
                    Please wait while we retrieve your application information.
                  </p>
                </>
              ) : application ? (
                <>
                  {(() => {
                    const config = getStatusConfig(application.status);
                    const isAccepted = application.status.toLowerCase() === 'accepted';

                    return (
                      <>
                        <div className="p-2.5">
                          <div className={`w-12 h-12 ${config.color} border-2 border-gray-400 flex items-center justify-center`}>
                            <span className="text-white font-bold text-xl">{config.icon}</span>
                          </div>
                        </div>
                        <h2 className="text-lg font-bold text-gray-800">{config.title}</h2>
                        <p className="text-sm text-gray-600 text-center max-w-xs">
                          {config.message}
                        </p>

                        {isAccepted && (
                          <div className="flex flex-col space-y-3 w-full max-w-xs">
                            <p className="text-sm text-gray-700 text-center font-medium">
                              Please confirm your attendance:
                            </p>
                            <div className="flex space-x-3 justify-center">
                              <WindowsButton
                                className="rounded-md py-2 px-4 bg-green-600 hover:bg-green-700"
                                onClick={() => handleStatusUpdate(Status.CONFIRMED)}
                                disabled={actionLoading}
                                title="Confirm Attendance"
                              >
                                {actionLoading ? <CircularProgress size="1rem" color="inherit" /> : "Confirm"}
                              </WindowsButton>
                              <WindowsButton
                                className="rounded-md py-2 px-4 bg-red-600 hover:bg-red-700"
                                onClick={() => handleStatusUpdate(Status.DECLINED)}
                                disabled={actionLoading}
                                title="Decline Attendance"
                              >
                                {actionLoading ? <CircularProgress size="1rem" color="inherit" /> : "Decline"}
                              </WindowsButton>
                            </div>
                          </div>
                        )}

                        <div className="text-xs text-gray-500 text-center max-w-xs">
                          If you require further assistance, please contact us at <a href="mailto:contact@bostonhacks.org">contact@bostonhacks.org</a>
                        </div>
                      </>
                    );
                  })()}
                </>
              ) : (
                <>
                  <div className="p-2.5">
                    <div className="w-12 h-12 bg-gray-600 border-2 border-gray-400 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">?</span>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">No Application Found</h2>
                  <p className="text-sm text-gray-600 text-center max-w-xs">
                    We couldn&apos;t find an application for the current year.
                  </p>
                </>
              )}

              <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 my-2.5"></div>

              <WindowsButton
                className="rounded-md py-1 px-3"
                onClick={() => router.back()}
                title="Back"
              >
                Back
              </WindowsButton>
            </div >
          </div >
        </Window >
      </div >
    </Background >
  );
};

export default StatusPage;
