import React, { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import forex from "../asset/forex.jpeg";

const AlphaIntelligence: React.FC = () => {
  const [data, setData] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const handleGet = () => {
    setLoading(true);
    axiosInstance
      .get(
        `/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${process.env.REACT_KEY}`
      )
      .then((response) => {
        if (
          response.data.Information ===
          "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits."
        ) {
          setErr(response.data.Information);
        } else {
          setData(response.data.feed);
        }
        console.log(response.data.feed);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
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
          Alpha Intelligence
        </h1>

        <div className="flex justify-start items-start gap-[20px] flex-col w-full">
          {data.map((item: any, index: any) => {
            const { banner_image, title, summary, url } = item;
            return (
              <div className="w-full border-[2px] border-solid border-[#dedede] rounded-[5px] p-[10px] flex justify-start items-start gap-[20px]">
                <div className="w-[35%] h-[135px]">
                  <img
                    src={banner_image}
                    alt={banner_image}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[70%]">
                  <h1 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full text-xl font-semibold m-0">
                    {title}
                  </h1>
                  <p>{summary}</p>
                  <button className="w-full bg-[black] mt-[7px] p-[8px] rounded-[5px] text-[red] font-medium">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            );
          })}

          <p>{err}</p>

          {loading && <p>Loading</p>}
        </div>
      </div>
    </section>
  );
};

export default AlphaIntelligence;
