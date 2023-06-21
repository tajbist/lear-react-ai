import { FunctionComponent } from "react";

const PracticeDesigns: FunctionComponent = () => {
  return (
    <div className="relative bg-mediumseagreen w-full h-[720px] overflow-hidden text-center text-[96px] text-black font-whyte-inktrap">
      <div className="absolute top-[calc(50%_-_34px)] left-[72px] bg-black w-[797px] h-[151px]" />
      <div className="absolute top-[calc(50%_-_63.5px)] left-[44px] bg-white flex flex-row pt-10 px-8 pb-11 items-start justify-start gap-[10px] border-[4px] border-solid border-black">
        <div className="absolute my-0 mx-[!important] right-[-7px] bottom-[-6px] bg-white box-border w-[26px] h-[26px] z-[0] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] bottom-[-7px] left-[-15px] bg-white box-border w-[26px] h-[26px] z-[1] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] top-[-15px] right-[-7px] bg-white box-border w-[26px] h-[26px] z-[2] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] top-[-15px] left-[-15px] bg-white box-border w-[26px] h-[26px] z-[3] border-[4px] border-solid border-black" />
        <b className="relative tracking-[-0.03em] leading-[100%] z-[4]">
          Practice designs
        </b>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[852px] h-[844.24px]"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[97px] left-[575.98px] w-[90.02px] h-[90.02px]"
        alt=""
        src="/common--icon16pen.svg"
      />
      <div className="absolute top-[504px] left-[940px] bg-salmon flex flex-col pt-2.5 px-[25px] pb-[7.5px] items-start justify-start border-[4px] border-solid border-black">
        <img
          className="absolute my-0 mx-[!important] top-[-46.48px] left-[-33.75px] w-[46.5px] h-[55.2px] z-[0]"
          alt=""
          src="/cursor.svg"
        />
      </div>
    </div>
  );
};

export default PracticeDesigns;
