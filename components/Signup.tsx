"use client"

import { useState } from "react";

const ToolTip = ({ children, onClose }: { children: React.ReactNode, onClose?: () => void }) => {
  return (
    <div className="absolute z-10 bg-gray-800 text-white text-xs rounded px-2 py-1">
      <button className="absolute top-0 right-0 text-white text-xs" onClick={onClose}>
        &times;
      </button>
      {children}
    </div>
  )
}


const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [isReady, setIsReady] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | undefined>(undefined);

  // remove once submit form is ready
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return;
    setIsReady(false);
    try {
      // https://stackoverflow.com/questions/71714110/can-you-submit-a-restful-request-to-a-google-forms-api
      if (!process.env.NEXT_PUBLIC_SIGNUP_URL) {
        throw new Error("No defined form URL. Please contact us at contact@bostonhacks.org");
      }

      const response = await fetch(`#`);
      console.log(response);

      setFormError(undefined); // Reset any previous errors
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("There was an error submitting the form. Please try again later.");
    }

    setIsReady(true);
    // handle logic, wait for return 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full h-full flex items-center justify-center flex-col lg:flex-row gap-y-5 lg:gap-x-3">
        <div className="w-full lg:basis-3/4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="text-sm lg:text-md bg-secondary/45 backdrop-blur-sm w-full px-4 py-2 border border-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-focus-primary" />
        </div>
        <div className="w-full lg:basis-1/4">
          <button
            onMouseOver={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            disabled={!isReady}
            className={`${isReady ? "bg-tertiary" : "bg-tertiary/70"} ${isReady ? "hover:bg-tertiary/70 hover:cursor-pointer" : ""} rounded-xl w-full px-4 py-2 text-center items-center`}>
            {/* {isReady ? "Notify Me" : "Loading..."} */}
            Notify Me
          </button>
          {tooltipVisible && (
            <ToolTip>
              This form is not yet ready. Please check back later!
            </ToolTip>
          )}
        </div>

      </form>
      {formError && (
        <div className="w-full">
          There was an error submitting the form: <span className="text-red-500">{formError}</span>
        </div>
      )}

      {/* remove once submit form is ready */}
      <div className="w-full text-center mt-4 text-red-300 text-xs font-light">
        This form is not yet ready. Please check back later!
      </div>
    </>
  )
}

export default Signup
