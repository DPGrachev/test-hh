import dayjs from "dayjs";
import { FC } from "react";
import { DateField, MainWrapped, ContentWrapped, AvatarField, UserField } from "./CallPageHeader.styles";
import 'dayjs/locale/ru';
import { CallsAnalytics } from "../assets/CallsAnalytics";
import { SearchIcon } from "../assets/SearchIcon";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";

export const CallPageHeader: FC = () => {
  return <MainWrapped>
    <ContentWrapped>
      <DateField>{dayjs().locale('ru').format('dddd, D MMM')}</DateField>
      <CallsAnalytics />
      <SearchIcon />
      <UserField>
        <p>ИП Сидорова Александра Михайловна</p>
        <ArrowDownIcon />
      </UserField>
      <AvatarField>
        <img src="image/avatar.png" alt="avatar" />
        <ArrowDownIcon />
      </AvatarField>
    </ContentWrapped>
  </MainWrapped>
}