import { DataType } from "@/utils/type-enums";
import React, { Dispatch, SetStateAction } from "react";
import Title from "./Title";

function Tab1({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div id="tab1">
      <Title
        title="Personal info"
        sub="Please provide your name, email, address, and phone number. "
      />
      <div className="flex text-sm mt-5 justify-between">
        <label
          className="text-sm text-primary-marine-blue font-semibold"
          htmlFor="name"
        >
          Name
        </label>
        <label className="text-primary-strawberry-red" htmlFor="name">
          This field is required
        </label>
      </div>
      <input
        className="w-full border py-2 px-3"
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <div className="flex text-sm mt-5 justify-between">
        <label
          className="text-sm text-primary-marine-blue font-semibold"
          htmlFor="email"
        >
          Email Address
        </label>
        <label className="text-primary-strawberry-red" htmlFor="email">
          This field is required
        </label>
      </div>
      <input
        className="w-full border py-2 px-3"
        type="text"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <div className="flex text-sm mt-5 justify-between">
        <label
          className="text-sm text-primary-marine-blue font-semibold"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <label className="text-primary-strawberry-red" htmlFor="phone">
          This field is required
        </label>
      </div>
      <input
        className="w-full border py-2 px-3"
        type="text"
        name="phone"
        id="phone"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  );
}

export default Tab1;
