
export const MissionCard = (props) => {
  return (
    <div className="w-[262px] h-[288px] border border-[#A95454] rounded-t-[108px]">
      <div className="flex flex-col gap-5 justify-center items-center my-10 mx-14">
        <p className="text-[13px] font-normal text-center">{props.id}</p>
        <p className="lg:text-[40px] text-[15px] font-medium text-center">{props.type}</p>
        <p className="text-[13px] font-normaltext-center">{props.details}</p>
      </div>
    </div>
  );
};


