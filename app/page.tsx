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
    <form className="font-bold underline" onSubmit={handleSubmit}>
      <Tabs step={state.step} data={data} setData={setData} />
      <Buttons prevTab={prevTab} nextTab={nextTab} step={state.step} />
    </form>
  );
}
