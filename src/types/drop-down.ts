import { ClassNameType } from "./class-names";

export type OptionType = {
    href: string;
    label: string;
  };
  
  export type DropDownType = {
    options: OptionType[];
    classNames: ClassNameType;
    buttonLabel: string;
  };