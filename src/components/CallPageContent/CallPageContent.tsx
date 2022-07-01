import { FC, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { useGetCallsQuery } from "../../store/callsApi";
import { getFilters,  } from "../../store/slices/selectors";
import { AddIcon } from "../assets/AddIcon";
import { CallPageFilters } from "../CallPageFilters";
import { CallsTableItem } from "../CallsTableItem";
import { CallDateFilter } from "../CallDateFilter/CallDateFilter";
import { Balance, CallsTable, InfoContainer, Wrapped } from "./CallPageContent.styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Order } from "../../const";
import { setOrder } from "../../store/slices/filters";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";
import { TailSpin } from  'react-loader-spinner'

export const CallPageContent: FC = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(getFilters);
  const {data, isSuccess, isLoading, isError} = useGetCallsQuery(filters);

  const onTimeHeaderClick = (evt : MouseEvent<HTMLTableCellElement>) => {
    if (evt.currentTarget.dataset.order === Order.ASC) {
      dispatch(setOrder(Order.DESC));
      return;
    }

    dispatch(setOrder(Order.ASC));
  }

  if (isLoading) {
    return <Wrapped className="loading">
      <TailSpin color="#002CFB"/>
      Загрузка
    </Wrapped>
  }
  
  if (isError) {
    return <Wrapped className="loading">
        <h1>В данный момент сервер недоступен</h1>
        <h2>повторите попытку позже</h2>
      </Wrapped>
  }

  return <Wrapped>
    <InfoContainer>
      <Balance>
        <p>Баланс: <b>272 ₽ </b></p>
        <AddIcon />
      </Balance>
      <CallDateFilter />
    </InfoContainer>
    <CallPageFilters />
    <CallsTable cellSpacing={0}>
      <thead>
        <tr>
          <th>Тип</th>
          <th 
            data-order={filters.order}
            onClick={onTimeHeaderClick}  
          >
            Время
            <span className={`sortIcon ${filters.order === Order.ASC ? 'isASC' : ''}`}>
              <ArrowDownIcon/>
            </span>
          </th>
          <th>Сотрудник</th>
          <th>Звонок</th>
          <th>Источник</th>
          <th>Оценка</th>
          <th>Длительность</th>
        </tr>
      </thead>
      {isSuccess && <tbody>
        {data.map((call) => <CallsTableItem key={call.id} call={call}/>)}
      </tbody>}
    </CallsTable>
  </Wrapped>
}