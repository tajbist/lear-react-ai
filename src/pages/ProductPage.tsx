import { FunctionComponent } from "react";

const ProductPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-inter">
      <div className="absolute w-[calc(100%_-_1045px)] top-[301px] right-[949px] left-[96px] rounded-3xl bg-whitesmoke box-border h-[444px] overflow-hidden text-xl border-[2px] border-solid border-gainsboro">
        <div className="absolute bottom-[98px] left-[24px] leading-[130%] font-semibold">
          Heirloom tomato
        </div>
        <div className="absolute bottom-[68px] left-[24px] leading-[130%] font-semibold text-darkolivegreen">
          $5.99 / lb
        </div>
        <div className="absolute bottom-[28px] left-[24px] text-base leading-[150%] text-dimgray">
          Grown in San Juan Capistrano, CA
        </div>
        <img
          className="absolute h-[calc(100%_-_148px)] w-full top-[0px] right-[0px] bottom-[148px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/edoneilavvdzlhdowaunsplash-11@2x.png"
        />
      </div>
      <div className="absolute w-full top-[112px] right-[0px] left-[0px] bg-white h-[149px] overflow-hidden text-center">
        <div className="absolute right-[275px] bottom-[33px] rounded-xl bg-darkolivegreen w-[88px] h-10 overflow-hidden text-white">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_28px)] leading-[130%] font-semibold">
            Default
          </div>
        </div>
        <div className="absolute right-[205px] bottom-[33px] rounded-xl bg-white box-border w-[62px] h-10 overflow-hidden border-[1px] border-solid border-silver">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_15px)] leading-[130%] font-semibold">
            A-Z
          </div>
        </div>
        <div className="absolute right-[96px] bottom-[33px] rounded-xl bg-white box-border w-[101px] h-10 overflow-hidden border-[1px] border-solid border-silver">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_34.5px)] leading-[130%] font-semibold">
            List view
          </div>
        </div>
        <div className="absolute bottom-[33px] left-[347px] text-xl leading-[130%] text-left">
          <span className="font-medium">Fresh</span>
          <span className="font-light"> — August 21, 2023</span>
        </div>
        <div className="absolute bottom-[16px] left-[96px] text-45xl tracking-[-0.02em] leading-[120%] font-newsreader text-left">
          Produce
        </div>
        <div className="absolute w-[calc(100%_-_190px)] right-[95px] bottom-[-1px] left-[95px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border h-0.5 border-t-[2px] border-solid border-gainsboro" />
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-28 overflow-hidden text-center">
        <div className="absolute top-[41px] left-[96px] text-13xl tracking-[-0.01em] leading-[100%] font-medium font-newsreader text-darkolivegreen text-left">
          World Peas
        </div>
        <div className="absolute top-[45.5px] right-[657px] leading-[130%]">
          Shop
        </div>
        <div className="absolute top-[45.5px] right-[532px] leading-[130%]">
          Newstand
        </div>
        <div className="absolute top-[45.5px] right-[394px] leading-[130%]">
          Who we are
        </div>
        <div className="absolute top-[45.5px] right-[270px] leading-[130%]">
          My profile
        </div>
        <div className="absolute top-[32px] right-[96px] rounded-lg bg-darkolivegreen w-[126px] h-12 overflow-hidden text-white">
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_40px)] leading-[130%] font-semibold">
            Basket (3)
          </div>
        </div>
      </div>
      <div className="absolute top-[301px] left-[523px] bg-white w-[395px] h-[444px] overflow-hidden text-xs">
        <div className="absolute top-[320px] left-[24px]">Organic ginger</div>
        <div className="absolute top-[350px] left-[24px]">$12.99 / lb</div>
        <div className="absolute top-[392px] left-[24px]">
          Grown in Huntington Beach, CA
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[394.67px] h-[296px] object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

export default ProductPage;
