import { FunctionComponent } from "react";

const Thumbnail: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-center text-[132px] text-black font-whyte-inktrap">
      <img
        className="absolute top-[543.01px] left-[728.49px] w-[718px] h-[180.16px]"
        alt=""
        src="/illo.svg"
      />
      <img
        className="absolute top-[44.25px] left-[0px] w-[713.5px] h-[119.94px]"
        alt=""
        src="/illo1.svg"
      />
      <div className="absolute top-[568.25px] left-[265.25px] bg-blueviolet-200 flex flex-col pt-2.5 px-[25px] pb-[7.5px] items-start justify-start border-[4px] border-solid border-black">
        <img
          className="absolute my-0 mx-[!important] top-[-46.48px] right-[-30.25px] w-[46.5px] h-[55.2px] z-[0]"
          alt=""
          src="/cursor1.svg"
        />
      </div>
      <div className="absolute top-[50.75px] left-[547px] bg-orangered flex flex-col pt-2.5 px-[25px] pb-[7.5px] items-start justify-start border-[4px] border-solid border-black">
        <img
          className="absolute my-0 mx-[!important] top-[52.28px] left-[-31.25px] w-[46.5px] h-[55.2px] z-[0]"
          alt=""
          src="/cursor2.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_68px)] left-[72px] bg-black w-[859px] h-[184px]" />
      <div className="absolute top-[calc(50%_-_96px)] left-[44px] bg-gold flex flex-row pt-11 px-8 pb-12 items-start justify-start gap-[10px] border-[4px] border-solid border-black">
        <div className="absolute my-0 mx-[!important] right-[-7px] bottom-[-6px] bg-white box-border w-[26px] h-[26px] z-[0] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] bottom-[-7px] left-[-15px] bg-white box-border w-[26px] h-[26px] z-[1] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] top-[-15px] right-[-7px] bg-white box-border w-[26px] h-[26px] z-[2] border-[4px] border-solid border-black" />
        <div className="absolute my-0 mx-[!important] top-[-15px] left-[-15px] bg-white box-border w-[26px] h-[26px] z-[3] border-[4px] border-solid border-black" />
        <b className="relative tracking-[-0.03em] leading-[100%] z-[4]">
          Figma basics
        </b>
      </div>
      <div className="absolute top-[373.5px] left-[1014.5px] bg-blueviolet-100 flex flex-col pt-2.5 px-[25px] pb-[7.5px] items-start justify-start border-[4px] border-solid border-black">
        <img
          className="absolute my-0 mx-[!important] top-[-46.48px] left-[-33.75px] w-[46.5px] h-[55.2px] z-[0]"
          alt=""
          src="/cursor3.svg"
        />
      </div>
    </div>
  );
};

export default Thumbnail;
