import { useState } from "react";

const SignInPage = ({ setSubTab, setHomeTab }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center py-5">
      <div className="border-1 flex flex-col justify-start border border-[#E0E0E0] rounded-t-[250px] mx-5 gap-10">
        <div className="w-full flex justify-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          ></svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mx-7 p-10">
          <p className="text-[#1F1F1F] text-[32px] font-medium">Sign In</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 mx-10 mb-7 px-10">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full items-center border-b border-[#E0E0E0] hover:border-[#A95454] hover:border-b">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 text-[#E0B51D] text-sm font-normal focus-within:ring-0 focus-within:outline-none"
                style={{ backgroundColor: "#F5F1ED" }}
              />
            </div>
            <div className="flex gap-2">
              <p className="text-[#ACB5BD] text-[13px] font-normal leading-5">
                This email address is invalid.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center border-b border-[#D1D5DB] hover:border-[#A95454] hover:border-b">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 text-[#E0B51D] text-sm focus-within:ring-0 focus-within:outline-none"
                style={{ backgroundColor: "#F5F1ED" }}
              />
              <div
                className="underline cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-[#ACB5BD] text-[13px] font-normal leading-5">
                Wrong password, please try again.
              </p>
            </div>
          </div>
          <span
            className="text-[#1F1F1F] text-base font-medium underline cursor-pointer"
            onClick={() => {
              setHomeTab("");
              setSubTab("Forgot password");
            }}
          >
            Forgot password?
          </span>
        </div>
      </div>
      <button className="w-[235px] px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base hover:border-[#A95454] hover:text-[#A95454]">
        Sign In
      </button>
    </div>
  );
};

export default SignInPage;
