import { Value } from "@/constants/valuesItems";

export interface ValuesProps {
  values: Value[];
  classNames: {
    item: string;
    itemContainer: string;
    itemIcon: string;
    itemTitles: string;
    itemTitle: string;
    itemSubTitle: string;
  };
  container: string;
}