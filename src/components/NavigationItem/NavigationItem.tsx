import { FC, useMemo } from "react";
import { getCurrentIcon } from "../assets/NavigationIcons";
import { CustomNavigationItem } from "./NavigationItem.styles";

const NavigationItems = {
  results: 'results',
  orders: 'orders',
  messages: 'messages',
  calls: 'calls',
  contractors: 'contractors',
  documents: 'documents',
  executors: 'executors',
  reports: 'reports',
  knowledgeBase: 'knowledgeBase',
  settings: 'settings',
};

const NavigationItemsTranslate = {
  [NavigationItems.results]: 'Итоги',
  [NavigationItems.orders]: 'Заказы',
  [NavigationItems.messages]: 'Сообщения',
  [NavigationItems.calls]: 'Звонки',
  [NavigationItems.contractors]: 'Контрагенты',
  [NavigationItems.documents]: 'Документы',
  [NavigationItems.executors]: 'Исполнители',
  [NavigationItems.reports]: 'Отчеты',
  [NavigationItems.knowledgeBase]: 'База знаний',
  [NavigationItems.settings]: 'Настройки',
}

type Props = {
  value: string;
}

export const NavigationItem: FC<Props> = ({value}) => {
  const Icon = useMemo(() => getCurrentIcon(value), [value]);
  const isActive = value === NavigationItems.calls;

  return <CustomNavigationItem isActive={isActive}>
    <Icon />
    {NavigationItemsTranslate[value]}
  </CustomNavigationItem>
}