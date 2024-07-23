import { DataType } from "@/utils/type-enums";
import React, { Dispatch, SetStateAction } from "react";

function Tab1({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div id="tab1">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="">
        <label htmlFor="name">Name</label>
        <p>This field is required</p>
      </div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <div className="">
        <label htmlFor="email">Email Address</label>
        <p>This field is required</p>
      </div>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <div className="">
        <label htmlFor="phone">Phone Number</label>
        <p>This field is required</p>
      </div>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  );
}

export default Tab1;
