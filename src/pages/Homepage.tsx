import { FunctionComponent } from "react";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[2092px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute w-[calc(100%_-_420px)] top-[279px] left-[217px] text-45xl tracking-[-0.02em] leading-[120%] text-center inline-block font-newsreader">
        <span>{`We’re `}</span>
        <i>farmers</i>
        <span>{`, `}</span>
        <i>purveyors</i>
        <span>{`, and `}</span>
        <i>eaters</i>
        <span> of organically grown food.</span>
      </div>
      <div className="absolute top-[481px] left-[calc(50%_-_113px)] rounded-lg bg-darkolivegreen w-[227px] h-16 overflow-hidden text-white">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_81.5px)] leading-[130%] font-semibold">
          Browse our shop
        </div>
      </div>
      <img
        className="absolute top-[701px] left-[96px] w-[504px] h-[693px] object-cover"
        alt=""
        src="/photo-1@2x.png"
      />
      <img
        className="absolute top-[791px] left-[660px] w-[780px] h-[480px] object-cover"
        alt=""
        src="/photo-2@2x.png"
      />
      <div className="absolute w-[calc(100%_-_704px)] top-[1287px] left-[660px] text-sm tracking-[-0.01em] leading-[160%] inline-block">
        <span className="font-medium">Central California</span>
        <span className="font-light">
          {" "}
          — The person who grew these was located in Central California and, er,
          hopefully very well-compensated.
        </span>
      </div>
      <div className="absolute top-[1555px] left-[96px] text-sm tracking-[0.04em] leading-[160%] uppercase font-semibold inline-block w-[181px]">
        WHAT WE BELIEVE
      </div>
      <div className="absolute w-[calc(100%_-_618px)] top-[1550px] left-[309px] leading-[160%] inline-block">
        <p className="m-0">
          We believe in produce. Tasty produce. Produce like:
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">What are we forgetting?</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
          Persian cucumbers, in addition to aforementioned “normal” cucumbers.
          Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
          pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
          Fruit of the Loom. Fruits of our labor (this website). Sorrel.
          Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
          tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear,
          we’re vendors of organic produce, but if you asked us to describe what
          escaroles are...
        </p>
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-28 overflow-hidden text-center text-base">
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
    </div>
  );
};

export default Homepage;
