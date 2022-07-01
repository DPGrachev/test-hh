import { FC } from "react";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";
import { SearchIcon } from "../assets/SearchIcon";
import { CallTypeFilter } from "../CallTypeFilter";
import { FilterItem, FiltersContainer, Search, Wrapped } from "./CallPageFilters.styles";

export const CallPageFilters: FC = () => {
  return <Wrapped>
    <Search>
      <SearchIcon />
      Поиск по звонкам
    </Search>
    <FiltersContainer>
      <CallTypeFilter />
      {/* <FilterItem>
        Все типы
        <ArrowDownIcon />
      </FilterItem> */}
      <FilterItem>
        Все сотрудники
        <ArrowDownIcon />
      </FilterItem>
      <FilterItem>
        Все звонки
        <ArrowDownIcon />
      </FilterItem>
      <FilterItem>
        Все источники
        <ArrowDownIcon />
      </FilterItem>
      <FilterItem>
        Все оценки
        <ArrowDownIcon />
      </FilterItem>
      <FilterItem>
        Все ошибки
        <ArrowDownIcon />
      </FilterItem>
    </FiltersContainer>
  </Wrapped>
}