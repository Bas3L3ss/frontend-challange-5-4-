import { DataType } from "@/utils/type-enums";
import { Dispatch, SetStateAction } from "react";

function Tab3({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div id="tab3">
      <h1>Select your plan</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="" id="checkboxesContainer">
        <input type="checkbox" name="onlineService" id="onlineService" />
        <div className="">
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
          <p id="pricing">$15/mo</p>
        </div>
        <input type="checkbox" name="largerStorage" id="largerStorage" />
        <div className="">
          <h4>Larger storage</h4>
          <p>Extra 1TB of cloud save</p>
          <p id="pricing">$15/mo</p>
        </div>
        <input
          type="checkbox"
          name="customizableProfile"
          id="customizableProfile"
        />
        <div className="">
          <h4>Customizable Profile</h4>
          <p>Custom theme on your profile</p>
          <p id="pricing">$15/mo</p>
        </div>
      </div>
    </div>
  );
}
export default Tab3;
