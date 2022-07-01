import { NavigationItems } from "../../../const";
import { CallsIcon } from "./calls";
import { ContractorsIcon } from "./contractors";
import { DocumentsIcon } from "./documents";
import { ExecutorsIcon } from "./executors";
import { KnowledgeBaseIcon } from "./knowledgeBase";
import { MessagesIcon } from "./messages";
import { OrdersIcon } from "./orders";
import { ReportsIcon } from "./reports";
import { ResultsIcon } from "./results";
import { SettingsIcon } from "./settings";

export const getCurrentIcon = (value: string) => {
  switch (value) {
    case NavigationItems.calls : {
      return CallsIcon;
    }
    case NavigationItems.contractors : {
      return ContractorsIcon;
    }
    case NavigationItems.documents : {
      return DocumentsIcon;
    }
    case NavigationItems.executors : {
      return ExecutorsIcon;
    }
    case NavigationItems.knowledgeBase : {
      return KnowledgeBaseIcon;
    }
    case NavigationItems.messages : {
      return MessagesIcon;
    }
    case NavigationItems.orders : {
      return OrdersIcon;
    }
    case NavigationItems.reports : {
      return ReportsIcon;
    }
    case NavigationItems.results : {
      return ResultsIcon;
    }
    case NavigationItems.settings : {
      return SettingsIcon;
    }
    default: {
      return SettingsIcon;
    }
  }
}