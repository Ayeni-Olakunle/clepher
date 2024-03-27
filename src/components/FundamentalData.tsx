import React, { useEffect, useState } from "react";
import { axiosInstance } from "./axios";

const FundamentalData: React.FC = () => {
  const [lost, setLost] = useState<Array<object>>([]);
  const [gain, setGain] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const handleGet = () => {
    setLoading(true);
    axiosInstance
      .get(`/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.REACT_KEY}`)
      .then((response) => {
        if (
          response.data.Information ===
          "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits."
        ) {
          setErr(response.data.Information);
        } else {
          setGain(response.data.top_gainers);
          setLost(response.data.top_losers);
        }
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setErr(error.Information);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGet();
  }, [0]);

  return (
    <section>
      <div className="p-[20px]">
        <h1 className="text-center text-xl mb-[20px] font-bold">
          Fundamental Data
        </h1>

        <div className="flex justify-between items-start gap-[20px] w-full md:flex-col">
          <div className="w-[45%] border-[1.5px] border-solid border-[lightgrey] rounded-[5px] md:w-full">
            <h1 className="text-[17px] font-bold text-[green] mx-[0] my-[10px] text-center">
              Top Gainers
            </h1>
            {gain.map((item: any, index: any) => {
              const { ticker, change_amount } = item;
              return (
                <div
                  className="flex justify-between items-center text-[gray] [border-bottom:1px_solid_#bcbcbc] p-[10px]"
                  key={index}
                >
                  <p>{ticker}</p>
                  <p className="font-bold text-[green]">
                    Gain: {change_amount}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[45%] border-[1.5px] border-solid border-[lightgrey] rounded-[5px] md:w-full">
            <h1 className="text-[17px] font-bold text-[#9c3030] mx-[0] my-[10px] text-center">
              Top Losers
            </h1>
            {lost.map((item: any, index: any) => {
              const { ticker, change_amount } = item;
              return (
                <div
                  className="flex justify-between items-center text-[gray] [border-bottom:1px_solid_#bcbcbc] p-[10px]"
                  key={index}
                >
                  <p>{ticker}</p>
                  <p className="font-bold text-[#9c3030]">
                    Lost: {change_amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <p>{err}</p>
      </div>
    </section>
  );
};

export default FundamentalData;
