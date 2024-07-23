import { DataType } from "./type-enums";

export function validation(step: number, data: DataType) {
  let flag = true;
  return flag;
  switch (step) {
    case 0: {
      if (data.name == "" || data.phone == "" || data.email == "") {
        flag = false;
      }

      break;
    }
    case 1: {
      console.log("step 2" + data.plan);
      break;
    }
    case 2: {
      console.log(
        "step 3" + data.isCustomizableProfile,
        data.isLargerStorage,
        data.isOnlineService
      );
      break;
    }
    case 3: {
      "step 4" + console.log(data.total);
      break;
    }

    default:
  }
  return flag;
}
