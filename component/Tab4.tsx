"use client";
import { useMyContext } from "@/app/provider";
import { DataType } from "@/utils/type-enums";
import { Dispatch, SetStateAction } from "react";

function Tab4({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const { state, setState } = useMyContext();

  return (
    <div id="tab4">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="">
        <div>
          <div className="flex">
            <h3>
              <span>Arcade</span>( <span id=""> Monthly </span>)
            </h3>
            <p id="pricing">$15/mo</p>
          </div>
          <button type="button" onClick={() => setState({ ...state, step: 1 })}>
            Change
          </button>
        </div>
        <div>
          <div className="flex">
            <h3>online service</h3>
            <p id="pricing">$15/mo</p>
          </div>
        </div>
        <div>
          <div className="flex">
            <h3>Larger storage</h3>
            <p id="pricing">$15/mo</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <p id="total">
          Total (per <span>Mo</span> )
        </p>
        <p id="pricingtotal">
          +$<span>12</span>/<span>Mo</span>
        </p>
      </div>
    </div>
  );
}

export default Tab4;
