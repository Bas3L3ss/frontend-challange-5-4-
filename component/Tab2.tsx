import { advancedIcon, arcadeIcon, proIcon } from "@/public/assets/images";
import { DataType } from "@/utils/type-enums";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function Tab2({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div id="tab2">
      <h1>Pick add-ons</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="flex">
        <div className="">
          <input type="radio" name="plan" value="Arcade" id="Arcade" />
          <Image src={arcadeIcon} alt="arcade plan" />

          <h3>Arcade</h3>
          <p id="pricing">
            $ <span>9</span>/ <span>mo</span>
          </p>
        </div>
        <div className="">
          <input type="radio" name="plan" value="Advanced" id="Advanced" />
          <Image src={advancedIcon} alt="advanced plan" />
          <h3>Advanced</h3>
          <p id="pricing">$12/mo</p>
        </div>
        <div className="">
          <input type="radio" name="plan" value="Pro" id="pro plan" />

          <Image src={proIcon} alt="" />
          <h3>Pro</h3>
          <p id="pricing">$15/mo</p>
        </div>
      </div>
      <div className="flex">
        <label htmlFor="month">Monthly</label>
        <input type="radio" name="date" id="month" />
        <input type="radio" name="date" id="year" />
        <label htmlFor="year">Yearly</label>
      </div>
    </div>
  );
}
export default Tab2;
