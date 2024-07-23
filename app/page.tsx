"use client";
import { useMyContext } from "./provider";
import { DataType, Plan } from "@/utils/type-enums";
import { FormEvent, useState } from "react";
import Buttons from "@/component/Buttons";
import Tabs from "@/component/Tabs";
import { validation } from "@/utils/action";

export default function Home() {
  const { state, setState } = useMyContext();

  const [data, setData] = useState<DataType>({
    name: "",
    email: "",
    phone: "",
    plan: Plan.Arcade,
    isYear: false,
    isOnlineService: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    total: 0,
  });

  const nextTab = () => {
    const flag = validation(state.step, data);
    if (flag) {
      setState({ ...state, step: state.step + 1 });
    }
  };
  const prevTab = () => {
    setState({ ...state, step: state.step - 1 });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className=" " onSubmit={handleSubmit}>
      <div className="px-6">
        <div className="lg:h-[100vh] shadow-md p-7 mx-auto lg:mt-0 -mt-28 rounded-md bg-white z-9 relative">
          <Tabs step={state.step} data={data} setData={setData} />
          <div className="lg:block invisible hidden lg:visible">
            <Buttons prevTab={prevTab} nextTab={nextTab} step={state.step} />
          </div>
        </div>
      </div>
      <div className="lg:invisible lg:hidden">
        <Buttons prevTab={prevTab} nextTab={nextTab} step={state.step} />
      </div>
    </form>
  );
}
