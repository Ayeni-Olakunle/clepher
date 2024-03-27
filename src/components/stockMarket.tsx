import React, { useState } from "react";
import stockImage from "../asset/stock.jpg";
import CoreTimeSeries from "./coreTimeSeries";
import AlphaIntelligence from "./alphaIntelligence";
import FundamentalData from "./FundamentalData";

export default function StockMarket() {
  const [count, setCount] = useState<number>(1);

  const handleClick = (e: number) => {
    setCount(e);
  };
  return (
    <section className="w-full flex justify-start items-start h-screen overflow-hidden">
      <div className="w-[40%]">
        <img src={stockImage} alt={stockImage} className="w-full" />
      </div>
      <div className="w-[60%] overflow-y-scroll h-screen">
        <h1 className="text-center text-[22px] font-medium m-[10px]">
          Alpha Vantage API Documentation
        </h1>
        <p className="px-[20px] py-[0] text-center text-[gray]">
          Our stock APIs © are grouped into seven (7) categories: (1) Core Time
          Series Stock Data APIs, (2) Alpha Intelligence™, (3) Fundamental Data,
          (4) Physical and Digital/Crypto Currencies (e.g., Bitcoin), (5)
          Commodities, (6) Economic Indicators, and (7) Technical Indicators
        </p>

        <div className="flex justify-around items-center mt-[20px] px-[10px] py-[0]">
          <button
            className={
              count === 0
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(0)}
          >
            Core Time
          </button>
          <button
            className={
              count === 1
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(1)}
          >
            Alpha Intelligence
          </button>
          <button
            className={
              count === 2
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(2)}
          >
            Fundamental Data
          </button>
          <button
            className={
              count === 3
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(3)}
          >
            Crypto
          </button>
          <button
            className={
              count === 4
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(4)}
          >
            Commodities
          </button>
          <button
            className={
              count === 5
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
          >
            Economic
          </button>
          <button
            className={
              count === 6
                ? `border-[1.4px] border-solid border-[black] px-[10px] py-[7px] rounded-[5px] text-[tomato] bg-[black] text-sm`
                : "border-[1.4px] border-solid border-[#bcbcbc] px-[10px] py-[7px] rounded-[5px] text-[gray] bg-[white] text-sm"
            }
            onClick={() => handleClick(6)}
          >
            Technical
          </button>
        </div>

        <div>
          {count === 0 && <CoreTimeSeries />}
          {count === 1 && <AlphaIntelligence />}
          {count === 2 && <FundamentalData />}
        </div>
      </div>
    </section>
  );
}
