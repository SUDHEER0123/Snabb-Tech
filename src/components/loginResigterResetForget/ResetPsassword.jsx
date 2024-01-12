import { useState } from "react";
import loginImage from "../../assets/loginImage.png";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [tab, setTab] = useState("Reset My Password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F5F1ED]">
      <div
        className="lg:w-2/3 h-[400px] lg:h-auto relative"
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:p-4 absolute top-0 left-0">
          <p className="lg:text-[45px] text-[23px] font-[350] text-[#F5F1ED] pl-4 lg:text-left text-center">
            Welcome to PANDA
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 flex flex-col min-h-screen">
        <div className="pt-4 pb-4 flex justify-center items-center">
          <div className="border-b-2 hover:border-b-2 hover:border-[#A95454] pr-3">
            <p className="text-#1F1F1F text-base font-normal leading-5 pb-2">
              Join PANDA
            </p>
          </div>
          <div className="border-b-2  px-3">
            <p className="text-[#ACB5BD] text-base font-normal leading-5 pb-2">
              or
            </p>
          </div>
          <div className="border-b-2 hover:border-b-2 hover:border-[#A95454]  pl-3">
            <p className="text-#1F1F1F text-base font-normal leading-5 pb-2">
              Sign in
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 justify-center items-center py-5">
          <div className="border-1 flex flex-col justify-start  border border-[#E0E0E0] rounded-t-[250px] mx-5 gap-10">
            <div className="w-full flex justify-center mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.1904 1.5957C11.1904 1.18149 11.5262 0.845703 11.9404 0.845703C12.3546 0.845703 12.6904 1.18149 12.6904 1.5957V10.285L17.2437 5.73173C17.5366 5.43884 18.0115 5.43884 18.3044 5.73173C18.5973 6.02462 18.5973 6.4995 18.3044 6.79239L13.7511 11.3457H22.4404C22.8546 11.3457 23.1904 11.6815 23.1904 12.0957C23.1904 12.5099 22.8546 12.8457 22.4404 12.8457H13.7511L18.3044 17.399C18.5973 17.6919 18.5973 18.1668 18.3044 18.4597C18.0115 18.7526 17.5366 18.7526 17.2437 18.4597L12.6904 13.9064V22.5957C12.6904 23.0099 12.3546 23.3457 11.9404 23.3457C11.5262 23.3457 11.1904 23.0099 11.1904 22.5957V13.9063L6.63712 18.4597C6.34422 18.7525 5.86935 18.7525 5.57646 18.4597C5.28356 18.1668 5.28356 17.6919 5.57646 17.399L10.1297 12.8457H1.44043C1.02622 12.8457 0.69043 12.5099 0.69043 12.0957C0.69043 11.6815 1.02622 11.3457 1.44043 11.3457H10.1297L5.57645 6.79241C5.28356 6.49951 5.28356 6.02464 5.57645 5.73175C5.86934 5.43885 6.34422 5.43885 6.63711 5.73175L11.1904 10.2851V1.5957Z"
                  fill="#1F1F1F"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3 mx-7 p-10">
              <p className="text-[#1F1F1F] text-[38px] font-medium">
                Reset password
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-5 mx-10 mb-7 px-10">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full flex items-center border-b border-[#D1D5DB] hover:border-[#A95454] hover:border-b">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-2 text-[#A95454]  text-sm focus-within:ring-0 focus-within:outline-none"
                    style={{ backgroundColor: "#F5F1ED" }}
                  />
                  {tab === "Sign in" && (
                    <span
                      className="underline cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  )}
                </div>

                <div className="w-full flex items-center border-b border-[#D1D5DB] hover:border-[#A95454] hover:border-b">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-2 text-[#A95454]  text-sm focus-within:ring-0 focus-within:outline-none"
                    style={{ backgroundColor: "#F5F1ED" }}
                  />
                  {tab === "Sign in" && (
                    <span
                      className="underline cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </span>
                  )}
                </div>
                {tab === "Sign in" && (
                  <p className="text-[#ACB5BD] text-[16px] font-medium leading-5 text-left">
                    Your password has been reset.
                  </p>
                )}
              </div>
            </div>
          </div>
          {tab === "Reset My Password" ? (
            <button
              className="w-[235px] px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base hover:border-[#A95454] hover:text-[#A95454]"
              onClick={() => setTab("Sign in")}
            >
              Reset My Password
            </button>
          ) : (
            <button
              className="w-[235px] px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base hover:border-[#A95454] hover:text-[#A95454]"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
