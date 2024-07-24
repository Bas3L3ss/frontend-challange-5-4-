import { advancedIcon, arcadeIcon, proIcon } from "@/public/assets/images";
import { DataType, Plan } from "@/utils/type-enums";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Title from "./Title";

function Tab2({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const setIsYear = (isYear: boolean) => {
    setData((prevData) => ({ ...prevData, isYear }));
  };

  const setAddons = (plan: Plan) => {
    setData((prevData) => ({ ...prevData, plan }));
  };

  const addons = [
    {
      icon: arcadeIcon,
      name: Plan.Arcade,
      price: 9,
    },
    {
      icon: advancedIcon,
      name: Plan.Advanced,
      price: 12,
    },
    {
      icon: proIcon,
      name: Plan.Pro,
      price: 15,
    },
  ];

  return (
    <div id="tab2">
      <Title
        title="Pick add-ons"
        sub="You have the option of monthly or yearly billing."
      />

      <div className="flex flex-col gap-3 mt-5 lg:flex-row ">
        {addons.map((item) => {
          let price = data.isYear ? item.price * 10 : item.price;
          let date = data.isYear ? "yr" : "mo";
          return (
            <button
              type="button"
              className={`
              shadow-md ${
                data.plan === item.name ? "border-primary-purplish-blue " : ""
              }
              flex-1
              rounded-md border  gap-5 flex items-center min-h-[80px] px-4`}
              key={item.name}
              onClick={() => setAddons(item.name)}
            >
              <Image src={item.icon} alt="" />
              <div className="text-left ">
                <h3 className="font-bold text-primary-marine-blue">
                  {item.name}
                </h3>
                <p id="pricing" className="text-sm text-neutral-cool-gray">
                  ${price}/{date}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3 py-2 mt-5 rounded-md bg-neutral-magnolia">
        <button
          onClick={() => setIsYear(false)}
          className={` 
            font-bold hover:cursor-pointer ${
              !data.isYear
                ? "text-primary-marine-blue"
                : " text-neutral-cool-gray"
            }`}
        >
          Monthly
        </button>

        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            checked={data.isYear}
            onChange={() => setIsYear(!data.isYear)}
            className="sr-only"
          />

          <div
            className={`relative block w-9 h-5  rounded-full bg-primary-marine-blue`}
          ></div>

          <div
            className={`absolute top-1  bg-white w-3 h-3 rounded-full transition-all  ease-in-out ${
              data.isYear ? "  left-[20.5px]" : "left-1"
            }`}
          ></div>
        </label>

        <button
          onClick={() => setIsYear(true)}
          className={` font-bold  hover:cursor-pointer ${
            data.isYear ? "text-primary-marine-blue" : " text-neutral-cool-gray"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
export default Tab2;
