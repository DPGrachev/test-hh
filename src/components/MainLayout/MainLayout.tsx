import { FC } from "react";
import { Outlet } from "react-router-dom";
import { SidePanel } from "../SidePanel";
import { Wrapped } from "./MainLayout.styles";

export const MainLayout: FC = () => {
  return (
    <Wrapped>
      <SidePanel />
      <Outlet />
    </Wrapped>
  )
}