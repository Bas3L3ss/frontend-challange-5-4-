import { useMyContext } from "@/app/provider";
import React, { useEffect, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  const { state, setState } = useMyContext();
  const [step, setStep] = useState(state.step);

  useEffect(() => {
    setStep(state.step);
  }, [state.step]);

  const indicators = [
    { number: 1, info: "Your info" },
    { number: 2, info: "Select plan" },
    { number: 3, info: "Add-ons" },
    { number: 4, info: "Summary" },
  ];

  return (
    <main className="  ">
      <div className="">
        <div className=" ">
          <ul className="">
            {indicators.map((indicator) => {
              return (
                <li key={indicator.number}>
                  <span
                    className={` ${
                      step == indicator.number - 1 ? "text-red-600" : ""
                    } ${
                      indicator.number == indicators.length &&
                      step === indicators.length
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {indicator.number}
                  </span>
                  <div className="">
                    <p>Step {indicator.number}</p>
                    <h4 className=" ">{indicator.info}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {children}
      </div>
    </main>
  );
}

export default Container;
