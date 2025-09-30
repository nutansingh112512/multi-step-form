import { useState } from "react";
import BaseTemplate from "../components/BaseTemplate";
import Button from "../components/Button";
import { SiApplearcade } from "react-icons/si";
import { IoLogoGameControllerA } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store/formSlice";

function Step2() {
  const heading = "Select your plan";
  const desc = "You have the option of monthly or yearly billing.";
  const plans = [
    {
      icon: <SiApplearcade size={35} />,
      title: "Arcade",
      price: 9,
    },
    {
      icon: <IoLogoGameControllerA size={35} />,
      title: "Advanced",
      price: 12,
    },
    {
      icon: <GiConsoleController size={35} />,
      title: "Pro",
      price: 15,
    },
  ];

  const navigate = useNavigate();
  const dispach = useDispatch();
  const state = useSelector((state) => state.form);

  const [plan, setPlan] = useState(state.plan);
  const [yearly, setYearly] = useState(state.yearly);

  const handleStep2 = (e) => {
    e.preventDefault();
    dispach(updateForm({plan, yearly}));
    navigate(`/3`);
  }

  return (
    <div className="">
      <BaseTemplate heading={heading} desc={desc} stepNo={2}>
        <form onSubmit={handleStep2} className="flex flex-col text-[#102957] gap-10 justify-between h-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 md:gap-5 md:flex-row justify-between">
              {plans.map((p) => (
                <label
                  key={p.title}
                  className={`cursor-pointer border-2 w-full rounded-lg px-4 py-2 md:p-2 flex gap-3 md:flex-col md:justify-between items-center md:items-start ${
                    plan.title === p.title
                      ? "bg-[#f8f9fe] border-[#564fe2]"
                      : "bg-white border-[#efeff0]"
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={p.title}
                    checked={plan.title === p.title}
                    onChange={() => setPlan({title: p.title, price: p.price})}
                    className="hidden"
                  />
                  <div>{p.icon}</div>
                  <div className="">
                    <h3 className="text-[#102957] text-sm md:text-base font-bold">{p.title}</h3>
                    <p className="text-[#8794ab] text-xs md:text-sm">${p.price}/mo</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 py-3 bg-[#f0f6ff] rounded-lg">
              <span
                className={`text-sm font-medium ${
                  !yearly ? "text-[#102957]" : "text-gray-400"
                }`}
              >
                Monthly
              </span>

              <button
                type="button"
                onClick={() => setYearly(!yearly)}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-[#102957]"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition
              ${yearly ? "translate-x-7" : "translate-x-1"}`}
                />
              </button>

              <span
                className={`text-sm font-medium ${
                  yearly ? "text-[#102957]" : "text-gray-400"
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
          <div className="flex justify-between fixed md:static bottom-0 place-self-end bg-white w-full left-0 mt-5 px-4 md:px-0 py-3">
            <Button onClick={() => navigate(`/1`)} type="button" className="text-[#8794ab] hover:text-[#636f85] pl-0">Go Back</Button>
            <Button className="bg-[#102957] text-white rounded ">
              Next Step
            </Button>
          </div>
        </form>
      </BaseTemplate>
    </div>
  );
}

export default Step2;
