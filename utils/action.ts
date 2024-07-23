import { DataType } from "./type-enums";

export function validation(step: number, data: DataType) {
  switch (step) {
    case 0: {
      console.log("step 1" + data.name, data.phone, data.email);
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
}
