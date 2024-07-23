"use client";
import { useMyContext } from "./provider";
import { DataType, Plan } from "@/utils/type-enums";
import { useState } from "react";
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
    validation(state.step, data);
    setState({ ...state, step: state.step + 1 });
  };
  const prevTab = () => {
    setState({ ...state, step: state.step - 1 });
  };

  return (
    <form className="font-bold underline ">
      <Tabs step={state.step} data={data} setData={setData} />
      <Buttons prevTab={prevTab} nextTab={nextTab} step={state.step} />
    </form>
  );
}
