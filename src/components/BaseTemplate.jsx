import Step from "./Step";
import { useNavigate } from "react-router-dom";

function BaseTemplate({ children, heading, desc, stepNo }) {
  const navigate = useNavigate();
  const handleStepClick = (step) => {
    step < stepNo
      ? navigate(`/${step}`)
      : step > stepNo
      ? alert("Please complete this step before moving forward.")
      : null;
  };

  return (
    <section className="flex md:justify-center flex-col md:flex-row gap-5 relative h-screen md:p-10 bg-[#f0f6ff] md:bg-white">
      <div className="relative h-1/4 md:h-full bg-[#463ef6] py-10 px-10 md:rounded-2xl md:w-80 __base-bg__">
        <div className="flex md:flex-col gap-3 md:gap-5 justify-center md:justify-start items-start">
          <Step
            onClick={() => handleStepClick(1)}
            active={stepNo === 1}
            stepNo={1}
            stepDesc="your info"
          />
          <Step
            onClick={() => handleStepClick(2)}
            active={stepNo === 2}
            stepNo={2}
            stepDesc="select plan"
          />
          <Step
            onClick={() => handleStepClick(3)}
            active={stepNo === 3}
            stepNo={3}
            stepDesc="add-ons"
          />
          <Step
            onClick={() => handleStepClick(4)}
            active={stepNo === 4}
            stepNo={4}
            stepDesc="summary"
          />
        </div>
      </div>
      <div className="md:w-[28rem] flex flex-col gap-5 md:gap-10 relative md:static -mt-20 mx-3 px-4 py-4 md:py-10 md:m-0 z-10 lg:m-0 bg-white rounded-lg ">
        <div className="">
          <h2 className="text-[#102957] font-bold text-2xl md:text-3xl mb-1 m">
            {heading}
          </h2>
          <p className="text-[#8794ab] text-sm md:text-base ">{desc}</p>
        </div>
        <div className="h-full">{children}</div>
      </div>
    </section>
  );
}

export default BaseTemplate;
