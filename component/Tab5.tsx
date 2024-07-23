import { thankyouIcon } from "@/public/assets/images";
import { DataType } from "@/utils/type-enums";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function Tab5({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div id="tab5">
      <Image src={thankyouIcon} alt="" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
export default Tab5;
