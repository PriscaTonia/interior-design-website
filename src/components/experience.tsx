import CountUp from "react-countup";

const Experience = ({
  text = "Default Text",
  num,
  i,
}: {
  text: string;
  num: number;
  i: number;
}) => {
  return (
    <div
      className={`flex min-w-[243px] flex-col ${
        i === 3 ? "" : "border-r"
      } border-primary-100 items-center justify-center gap-4`}
    >
      <h5 className="text-primary-100 text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ">
        {/* <CountUp
          duration={3}
          start={0}
          end={num}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        /> */}
        {num}
      </h5>
      <p className="text-text-gray-200 text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9">
        {text}
      </p>
    </div>
  );
};

export default Experience;
