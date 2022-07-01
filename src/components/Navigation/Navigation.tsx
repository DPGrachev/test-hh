import { FC } from "react";
import { NavigationItems } from "../../const";
import { NavigationItem } from "../NavigationItem";
import { NavigationWrapped } from "./Navigation.styles";

export const Navigation: FC = () => {
  return <NavigationWrapped >
    {Object.keys(NavigationItems).map((item) => <NavigationItem key={item} value={item} />)}

  </NavigationWrapped>
}