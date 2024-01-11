import { useState } from "react";
import loginImage from "../assets/loginImage.png";
import JoinPanda from "./JoinPanda";
import SignInPage from "./SignInPage";


const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-2/3">
        <img
          className="object-cover object-center h-full w-full"
          src={loginImage}
          alt="login image"
        />
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
        {/* Paste Components here */}

     
<SignInPage/>


      </div>
    </div>
  );
};

export default Login;
