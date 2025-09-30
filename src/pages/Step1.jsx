import { useDispatch, useSelector } from "react-redux";
import BaseTemplate from "../components/BaseTemplate";
import Button from "../components/Button";
import { useState } from "react";
import { updateForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";

function Step1() {
  const heading = "Personal Info";
  const desc = "Please provide your name, email address and phone number.";

  const navigate = useNavigate();
  const dispach = useDispatch();
  const state = useSelector((state) => state.form);

  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [phone, setPhone] = useState(state.phone);

  const validatePhone = (value) => {
    const phonePattern = /^\+?[0-9]*$/;
    return phonePattern.test(value);
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    if (phone.length < 10 && phone.length > 15) alert("Please enter a valid mobile number.");
    dispach(updateForm({ name, email, phone }));
    navigate(`/2`);
  };

  return (
    <div className="">
      <BaseTemplate heading={heading} desc={desc} stepNo={1}>
        <form
          onSubmit={handleStep1}
          className="flex flex-col text-[#102957] gap-2 h-full justify-between"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Brad Pit"
              className="border-[#bfc6d2cf] border rounded px-3 py-2 focus:outline-none mb-5"
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. brad.pit@lorem.com"
              className="border-[#bfc6d2cf] border rounded px-3 py-2 focus:outline-none mb-5"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => {
                if (validatePhone(e.target.value)) {
                  setPhone(e.target.value);
                }
              }}
              placeholder="e.g. +91 2234156970"
              className={`border-[#bfc6d2cf] border rounded px-3 py-2 focus:outline-none mb-5 focus:shadow ${
                (phone.length>=10 && phone.length <=15) ? "shadow-green-400" : "shadow-red-400"
              }`}
            />
          </div>
          <div className="flex justify-between fixed md:static bottom-0 place-self-end bg-white w-full left-0 px-4 md:px-0 py-3">
            <div></div>
            <Button className="bg-[#102957] text-white rounded ">
              Next Step
            </Button>
          </div>
        </form>
      </BaseTemplate>
    </div>
  );
}

export default Step1;
