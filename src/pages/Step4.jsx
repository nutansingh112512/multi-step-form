import BaseTemplate from "../components/BaseTemplate";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../store/formSlice";
import { useEffect } from "react";

function Step4() {
  const heading = "Finishing up";
  const desc = "Double-check everything looks OK before confirming.";

  const navigate = useNavigate();
  const dispach = useDispatch();
  const state = useSelector((state) => state.form);
  const { plan, selectedAddOn, yearly } = state;
  const totalPrice =
    plan.price + selectedAddOn.reduce((total, addOn) => total + addOn.price, 0);

  const handleConfirmation = () => {
    alert(
      `Form submitted successfully!\nName: ${state.name}\nEmail: ${
        state.email
      }\nPhone: ${state.phone}\nPlan: ${state.plan.title}(${
        state.yearly ? "Yearly" : "Monthly"
      })\nAddons: ${state.selectedAddOn.map((a) => a.title)}`
    );
    dispach(
      updateForm({
        name: "",
        email: "",
        phone: "",
        plan: {
          title: "Arcade",
          price: 9,
        },
        selectedAddOn: [],
        yearly: false,
      })
    );
    navigate(`/1`);
  };

  useEffect(() => {
    if (!state.name) navigate(`/1`);
  }, []);

  return (
    <div className="">
      <BaseTemplate heading={heading} desc={desc} stepNo={4}>
        <div className="flex flex-col text-[#102957] gap-10 justify-between h-full">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 bg-[#f0f6ff] rounded-lg p-2 md:p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm md:text-base">
                    {plan.title} ({yearly ? "Yearly" : "Monthly"})
                  </h4>
                  <a href="/2" className="text-[#8794ab] text-xs underline">
                    Change
                  </a>
                </div>
                <h4 className="font-bold text-sm md:text-base">
                  ${yearly ? `${plan.price * 10}/yr` : `${plan.price}/mo`}
                </h4>
              </div>
              <div className="w-full border-b border-[#8794ab]"></div>
              {selectedAddOn.map((addOn) => (
                <div
                  key={addOn.title}
                  className="flex justify-between items-center text-xs md:text-sm"
                >
                  <p className="text-[#8794ab]">{addOn.title}</p>
                  <p>
                    +${yearly ? `${addOn.price * 10}/yr` : `${addOn.price}/mo`}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm md:text-sm p-2 md:p-4">
              <p className="text-[#8794ab]">
                Total (per {yearly ? "year" : "month"})
              </p>
              <p className="text-[#463ef6] text-base md:text-lg font-bold">
                +${yearly ? `${totalPrice * 10}/yr` : `${totalPrice}/mo`}
              </p>
            </div>
          </div>
          <div className="flex justify-between fixed md:static bottom-0 place-self-end bg-white w-full left-0 mt-5 px-4 md:px-0 py-3">
            <Button
              type="button"
              className="text-[#8794ab] hover:text-[#636f85] pl-0"
              onClick={() => navigate(`/3`)}
            >
              Go Back
            </Button>
            <Button
              onClick={handleConfirmation}
              className="bg-[#463ef6] hover:bg-[#3f37d9] text-white rounded "
            >
              Confirm
            </Button>
          </div>
        </div>
      </BaseTemplate>
    </div>
  );
}

export default Step4;
