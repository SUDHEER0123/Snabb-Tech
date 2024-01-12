import { useState } from "react";
import star from "../../assets/star2.svg";
import Page from "./Pages";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full bg-[#F5F1ED] hidden sm:flex flex-col gap-10 py-5">
        <div className="w-full flex justify-between items-center px-10">
          <span className="text-base font-normal tracking-[-1.5px]">
            EN - FR
          </span>
          <div className="text-[40px] font-normal text-[#1F1F1F] flex justify-center items-center">
            Bienvenue sur P
            <div className="w-[25px] h-[28px] border-[3px] border-black rounded-t-[16.028px] flex justify-center items-center">
              <img className="w-11 h-11" src={star} alt="star" />
            </div>
            NDA
          </div>
          <div className="flex justify-center gap-12">
            <span className="text-base font-normal tracking-[-1.5px] underline">
              Créer un compte
            </span>
            <span className="text-base font-normal tracking-[-1.5px] underline">
              Se connecter
            </span>
          </div>
        </div>
        <div className="w-full flex justify-around items-center px-20">
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            missions De PANDA
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Fonctionnalités
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Eexperts
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Organisations en Afrique
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Offres d'emploi
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Evénements à venir
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            {" "}
            Témoignages
          </span>
          <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
            Fondateurs
          </span>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden fixed inset-0 bg-[#F5F1ED]">
        <div className="w-full flex justify-between px-5">
          <span className="text-[13px] font-normal tracking-[-1.5px] text-[#1F1F1F]">
            EN - FR
          </span>
          <p className="text-[23px] font-[350] text-[#1F1F1F] text-center">
            Bienvenue sur PANDA
          </p>
          <span
            className="w-[17px] h-4 rounded-md text-[#1F1F1F]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "×" : "☰"}
          </span>
        </div>

        {isOpen ? (
          <div className="absolute inset-0 p-4 top-20">
            <div className="border border-[#1F1F1F] rounded-t-[180px] h-full">
              <div className="flex flex-col gap-7 justify-center items-center my-20">
                <p className="text-base tracking-[-1.5px] font-normal underline">
                  Créer un compte
                </p>
                <p className="text-base tracking-[-1.5px] font-normal underline">
                  Se connecter
                </p>
                <div className="w-[25px] h-[28px]">
                  <img className="w-11 h-11" src={star} alt="star" />
                </div>
                <div className="flex flex-col gap-10 items-center">
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    missions De PANDA
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Fonctionnalités
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Eexperts
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Organisations en Afrique
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Offres d'emploi
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Evénements à venir
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    {" "}
                    Témoignages
                  </span>
                  <span className="text-[#1F1F1F] text-[13px] font-normal tracking-[-1.5px]">
                    Fondateurs
                  </span>
                </div>
              </div>
            </div> 
          </div>
        ):(
          <div className="w-full h-full overflow-auto">
            <Page/>
            </div>
          
        )
        
        }
      </div>
    </>
  );
};

export default Navbar;
