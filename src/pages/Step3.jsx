import { useEffect, useState } from "react";
import BaseTemplate from "../components/BaseTemplate";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store/formSlice";

function Step3() {
  const heading = "Pick add-ons";
  const desc = "Add-ons help enhance your gaming experience.";
  const addOns = [
    { title: "Online service", desc: "Access to multiplayer games", price: 1 },
    { title: "Larger storage", desc: "Extra 1TB of cloud save", price: 2 },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ];

  const navigate = useNavigate();
  const dispach = useDispatch();
  const state = useSelector((state) => state.form);

  const [selectedAddOn, setSelectedAddOn] = useState(state.selectedAddOn);

  const toggleAddOn = (addon) => {
    setSelectedAddOn((prev) =>
      prev.find((a) => a.title === addon.title)
        ? prev.filter((t) => t.title !== addon.title)
        : [...prev, { title: addon.title, price: addon.price }]
    );
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    if (selectedAddOn.length === 0) alert("No AddOns have been selected.");
    dispach(updateForm({ selectedAddOn }));
    navigate(`/4`);
  };

  useEffect(() => {
    if (!state.name) navigate(`/1`);
  }, []);

  return (
    <div className="">
      <BaseTemplate heading={heading} desc={desc} stepNo={3}>
        <form
          onSubmit={handleStep3}
          className="flex flex-col text-[#102957] gap-10 justify-between h-full"
        >
          <div className="flex flex-col gap-3 md:gap-5 justify-between">
            {addOns.map((addOn) => (
              <label
                key={addOn.title}
                className={`cursor-pointer border-2 w-full rounded-lg p-2 flex justify-between items-center ${
                  selectedAddOn.find((a) => a.title === addOn.title)
                    ? "bg-[#f8f9fe] border-[#564fe2]"
                    : "bg-white border-[#efeff0]"
                }`}
              >
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="addOn"
                    value={addOn.title}
                    checked={
                      !!selectedAddOn.find((a) => a.title === addOn.title)
                    }
                    onChange={() => toggleAddOn(addOn)}
                    className="w-4 h-4 accent-[#564fe2]"
                  />
                  <div className="">
                    <h3 className="text-[#102957] text-sm md:text-base font-bold">
                      {addOn.title}
                    </h3>
                    <p className="text-[#8794ab] text-xs md:text-sm">
                      {addOn.desc}
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#564fe2]">
                  +${addOn.price}/mo
                </p>
              </label>
            ))}
          </div>
          <div className="flex justify-between fixed md:static bottom-0 place-self-end bg-white w-full left-0 mt-5 px-4 md:px-0 py-3">
            <Button
              onClick={() => navigate(`/2`)}
              type="button"
              className="text-[#8794ab] hover:text-[#636f85] pl-0"
            >
              Go Back
            </Button>
            <Button className="bg-[#102957] text-white rounded ">
              Next Step
            </Button>
          </div>
        </form>
      </BaseTemplate>
    </div>
  );
}

export default Step3;
