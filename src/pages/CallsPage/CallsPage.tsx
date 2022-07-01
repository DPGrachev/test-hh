import { FC } from "react";
import { CallPageContent } from "../../components/CallPageContent";
import { CallPageHeader } from "../../components/CallPageHeader";
import { Wrapped } from "./CallsPage.styles";

export const CallsPage: FC = () => {
  return <Wrapped>
    <CallPageHeader />
    <CallPageContent />
  </Wrapped>
}