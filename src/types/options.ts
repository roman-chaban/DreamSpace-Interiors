import { NavPaths } from "@/enums/navPaths";

export interface Option {
  label: string;
  href: string;
}

export const options: Array<Option> = [{ label: 'Blog', href: NavPaths.BLOG }];


