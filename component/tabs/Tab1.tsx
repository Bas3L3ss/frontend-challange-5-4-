import { DataType } from "@/utils/type-enums";
import React, { Dispatch, SetStateAction } from "react";
import Title from "../Title";

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
      <div className="flex justify-between mt-5 text-sm">
        <label
          className="text-sm font-semibold text-primary-marine-blue"
          htmlFor="name"
        >
          Name
        </label>
        <label className="text-primary-strawberry-red" htmlFor="name">
          This field is required
        </label>
      </div>
      <input
        className="w-full px-3 py-2 border"
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <div className="flex justify-between mt-5 text-sm">
        <label
          className="text-sm font-semibold text-primary-marine-blue"
          htmlFor="email"
        >
          Email Address
        </label>
        <label className="text-primary-strawberry-red" htmlFor="email">
          This field is required
        </label>
      </div>
      <input
        className="w-full px-3 py-2 border"
        type="text"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <div className="flex justify-between mt-5 text-sm">
        <label
          className="text-sm font-semibold text-primary-marine-blue"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <label className="text-primary-strawberry-red" htmlFor="phone">
          This field is required
        </label>
      </div>
      <input
        className="w-full px-3 py-2 border"
        type="text"
        name="phone"
        id="phone"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  );
}

export default Tab1;
