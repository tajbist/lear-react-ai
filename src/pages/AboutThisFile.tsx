import { FunctionComponent } from "react";

const AboutThisFile: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[720px] overflow-hidden flex flex-col py-[185px] px-24 box-border items-start justify-start gap-[24px] text-left text-[72px] text-black font-whyte">
      <b className="self-stretch relative tracking-[-0.03em] leading-[130%]">
        Hi! Meet Figma.
      </b>
      <div className="relative text-29xl tracking-[-0.02em] leading-[150%] inline-block w-[800px]">{`This space is for learning the basics of Figma, and to practice on some sample designs. `}</div>
    </div>
  );
};

export default AboutThisFile;
