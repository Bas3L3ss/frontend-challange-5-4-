export type DataType = {
  name: string;
  email: string;
  phone: string;
  plan: PlanEnum;
  isYear: boolean;
  isOnlineService: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  total: number;
};

export enum PlanEnum {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

export type PlanType = {
  icon: string;
  name: PlanEnum;
  price: number;
};

export type AddonsType = {
  title: string;
  info: string;
  price: number;
  isActive: boolean;
  target: keyof DataType;
};
