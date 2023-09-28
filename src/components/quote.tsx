import React from "react";
import RightPattern from "../icons/right-quote-pattern.tsx";
import LeftPattern from "../icons/left-quote-pattern.tsx";
import Quote from "../icons/quote.tsx";

export interface QuoteProps {
  text: string;
  name: string;
}

const QuoteText = ({ text, name }: QuoteProps) => {
  return (
    <div className="flex w-full max-w-full lg:max-w-[80%]">
      <LeftPattern />
      <div className="flex flex-col w-full items-center justify-center gap-4 lg:gap-8 lg:mx-[-30px]">
        <Quote />
        <h4 className="text-[20px] leading-[33px] lg:text-[35px] lg:leading-[43.75px] italic tracking-wide font-dm text-primary-200 text-center">
          {text}
        </h4>
        <p className="text-text-gray text-base tracking-tight lg:text-[25px] font-jost lg:leading-[37px] text-center ">
          {" "}
          {`-${name}`}{" "}
        </p>
      </div>
      <RightPattern />
    </div>
  );
};

export default QuoteText;
