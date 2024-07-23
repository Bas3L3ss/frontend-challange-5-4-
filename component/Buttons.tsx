import React, { SetStateAction } from "react";

function Buttons({
  prevTab,
  nextTab,
  step,
}: {
  prevTab: () => void;
  nextTab: () => void;
  step: number;
}) {
  return (
    <div id="buttons" className="grid grid-cols-2">
      <button
        type="button"
        id="return"
        className={`${
          step >= 1 && step < 4 ? "" : "invisible hidden  "
        }col-start-1 `}
        onClick={prevTab}
      >
        Go Back
      </button>
      <button
        type="button"
        id="next"
        className={`${step < 3 ? "" : "invisible hidden "} col-start-2`}
        onClick={nextTab}
      >
        Next Step
      </button>
      <button
        type="submit"
        id="next"
        className={`${step === 3 ? "" : "invisible hidden   "} col-start-2`}
        onClick={nextTab}
      >
        Confirm
      </button>
    </div>
  );
}

export default Buttons;
