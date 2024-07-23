export type DataType = {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  isYear: boolean;
  isOnlineService: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  total: number;
};

export enum Plan {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}
