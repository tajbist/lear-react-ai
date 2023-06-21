import { FunctionComponent } from "react";

const WhatsInThis: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden text-left text-29xl text-black font-whyte">
      <div className="absolute top-[96px] left-[96px] tracking-[-0.02em] leading-[150%] inline-block w-[716px]">
        Check out the examples below. They’re for you to hack up, replicate, and
        make your own.
      </div>
      <img
        className="absolute bottom-[279px] left-[826px] w-[140px] h-[258px]"
        alt=""
        src="/vector-133.svg"
      />
      <img
        className="absolute bottom-[-204.75px] left-[calc(50%_-_522px)] rounded w-[348px] h-[436.75px] object-cover"
        alt=""
        src="/example-1@2x.png"
      />
      <img
        className="absolute bottom-[0px] left-[calc(50%_-_174px)] rounded w-[348px] h-[232px] object-cover"
        alt=""
        src="/example-2@2x.png"
      />
      <img
        className="absolute bottom-[0px] left-[calc(50%_+_174px)] rounded w-[348px] h-[232px] object-cover"
        alt=""
        src="/example-3@2x.png"
      />
    </div>
  );
};

export default WhatsInThis;
