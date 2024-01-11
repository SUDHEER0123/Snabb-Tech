import { useState } from "react";
import loginImage from "../../assets/loginImage.png";
import JoinPanda from "./JoinPanda";
import SignInPage from "./SignInPage";
import ForgetPassword from "./ForgetPassword";

const Login = () => {
  const [subTab, setSubTab] = useState("");
  const [homeTab, setHomeTab] = useState("Join PANDA");
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
          <div
            className={`border-b-2 hover:border-b-2 hover:border-[#A95454] pr-3 cursor-pointer ${
              homeTab === "Join PANDA" ? "border-[#A95454] border-b-3" : null
            }`}
            onClick={() => setHomeTab("Join PANDA")}
          >
            <p className="text-#1F1F1F text-base font-normal leading-5 pb-2">
              Join PANDA
            </p>
          </div>
          <div className="border-b-2  px-3">
            <p className="text-[#ACB5BD] text-base font-normal leading-5 pb-2">
              or
            </p>
          </div>
          <div
            className={`border-b-2 hover:border-b-2 hover:border-[#A95454]  pl-3 cursor-pointer ${
              homeTab === "Sign in" ? "border-[#A95454] border-b-3" : null
            }`}
            onClick={() => setHomeTab("Sign in")}
          >
            <p className="text-#1F1F1F text-base font-normal leading-5 pb-2">
              Sign in
            </p>
          </div>
        </div>
        {/* Paste Components here */}
        {homeTab === "Join PANDA" ? (
          <JoinPanda />
        ) : homeTab === "Sign in" ? (
          <SignInPage setSubTab={setSubTab} setHomeTab={setHomeTab} />
        ) : homeTab === "" && subTab === "Forgot password" ? (
          <ForgetPassword />
        ) : null}
      </div>
    </div>
  );
};

export default Login;
