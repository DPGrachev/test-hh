import { FC } from "react";
import { Navigation } from "../Navigation";
import { SidePanelWrapped } from "./SidePanel.styles";

export const SidePanel : FC = () => {
  return <SidePanelWrapped>
    <img src="./logo.png" alt="logo" style={{margin: '24px 12px'}}/>
    <Navigation />
  </SidePanelWrapped>
}