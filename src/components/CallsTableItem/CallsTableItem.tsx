import dayjs from "dayjs";
import { FC, useState } from "react";
import { useGetRecordMutation } from "../../store/callsApi";
import { CallAdaptForClient } from "../../types/Calls";
import { InCallIcon } from "../assets/InCallIcon";
import { OutCallIcon } from "../assets/OutCallIcon";
import { Audio, DownloadButton, Row } from "./CallsTableItem.styles";

type Props = {
  call: CallAdaptForClient,
}

export const CallsTableItem: FC<Props> = ({call}) => {
  const [isActive, setIsActive] = useState(false);
  const [getRecord, {isLoading, data}] = useGetRecordMutation();

  const onFocus = () => {
    if (call.time && call.record) {
      setIsActive(!isActive)
    }
  }

  const onDownloadButtonClick = () => {
    getRecord(call);
  }

  return <Row onMouseEnter={onFocus} onMouseLeave={onFocus}>
    <td>
      {call.inOut === 1
        ? <InCallIcon />
        : <OutCallIcon />
      }
    </td>
    <td>{dayjs(call.date).format('DD MMMM HH:mm')}</td>
    <td><img src={call.personAvatar || 'image/avatar.png'} alt="avatar" /></td>
    <td>{call.toNumber}</td>
    <td>{call.source}</td>
    <td></td>
    <td>
      {!isActive && call.record && call.time > 0 && dayjs(0).second(call.time).format('m:ss')}
      {!data && isActive && <DownloadButton onClick={onDownloadButtonClick}>{isLoading ? 'Загрузка...' : 'Скачать запись разговора'}</DownloadButton>}
      {data && isActive && <Audio controls src={data} />}
    </td>
  </Row>
}