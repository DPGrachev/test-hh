import dayjs from "dayjs";
import { FC, MouseEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { setInOut } from "../../store/slices/filters";
import { ArrowDownIcon } from "../assets/ArrowDownIcon";
import { CurrentValueButton, Menu, Wrapped } from "./CallTypeFilter.styles";

const callTypes = {
  in: 'Входящие',
  out: 'Исходящие',
  all: 'Все типы'
}

const validateCallTypes = (value: string) => {
  switch (value) {
    case callTypes.in: {
      return 1
    }
    case callTypes.out: {
      return 0
    }
    default: {
      return undefined
    }
  }
}

export const CallTypeFilter: FC = () => {
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLElement>(null);
  const [currentValue, setCurrentValue] = useState(callTypes.all)
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
    dispatch(setInOut(validateCallTypes(value)));
  }

  return (
    <div className="container">
      <Wrapped>
        <CurrentValueButton onClick={onButtonClick}>
          <span>{currentValue}</span>
          <ArrowDownIcon />
        </CurrentValueButton>
        <Menu
          ref={dropdownRef}
          className={`${isActive ? "active" : "inactive"}`}
        >
          <ul >
            {Object.values(callTypes).map((value) => <li key={value} data-value={value} onClick={onDateRangeClick}> 
              {value}
            </li>)}
          </ul>
        </Menu>
      </Wrapped>
    </div>
  );
}