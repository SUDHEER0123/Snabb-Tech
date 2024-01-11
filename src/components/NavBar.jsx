import star from "../assets/star2.svg";
const Navbar = () => {
  return (
    <div className="w-full bg-[#F5F1ED] hidden sm:flex flex-col gap-10 py-5 sm-m:hidden">
      <div className="w-full flex justify-between items-center px-10">
        <span className="text-base font-normal tracking-[-1.5px]">EN - FR</span>
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
      <div className="w-full flex justify-around items-center px-10">
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
  );
};

export default Navbar;
