import dayjs from "dayjs";
import { FC, MouseEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { setDate } from "../../store/slices/filters";
import { CalendarIcon } from "../assets/CalendarIcon";
import { CurrentValueButton, Menu, Wrapped } from "./CallDateFilter.styles";

const dateRangeValues = {
  threeDays: '3 дня',
  week: 'Неделя',
  month: 'Месяц',
  year: 'Год',
}

const ValidateDateRange = (value: string) => {

  switch (value) {
    case dateRangeValues.threeDays: {
      return [dayjs().subtract(3,'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
    }
    case dateRangeValues.week: {
      return [dayjs().subtract(1,'week').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
    }
    case dateRangeValues.month: {
      return [dayjs().subtract(1,'month').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
    }
    case dateRangeValues.year: {
      return [dayjs().subtract(1,'year').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
    }
    default : {
      return [dayjs().subtract(3,'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')];
    }
  }
}

export const CallDateFilter: FC = () => {
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLElement>(null);
  const [currentValue, setCurrentValue] = useState(dateRangeValues.threeDays)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onButtonClick = (e : MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (typeof setIsActive !== 'boolean'){
        setIsActive(!isActive)
      }
  };

  const onDateRangeClick = (evt: MouseEvent<HTMLLIElement>) => {
    const value = evt.currentTarget.dataset.value as string;
    setCurrentValue(value);
    if (typeof setIsActive !== 'boolean'){
      setIsActive(!isActive)
    }
    dispatch(setDate(ValidateDateRange(value)));
  }

  return (
    <div className="container">
      <Wrapped>
        <CurrentValueButton onClick={onButtonClick}>
          <CalendarIcon />
          <span>{currentValue}</span>
        </CurrentValueButton>
        <Menu
          ref={dropdownRef}
          className={`${isActive ? "active" : "inactive"}`}
        >
          <ul >
            {Object.values(dateRangeValues).map((value) => <li key={value} data-value={value} onClick={onDateRangeClick}> 
              {value}
            </li>)}
          </ul>
        </Menu>
      </Wrapped>
    </div>
  );
}