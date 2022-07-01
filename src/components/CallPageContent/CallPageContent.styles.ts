import styled from 'styled-components'

export const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 1440px;

  &.loading {
    height: 100%;
    justify-content: center;
    color: #002CFB;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 34px;
`
export const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 12px;
  background-color: white;
  border-radius: 48px;
  width: 145px;
  height: 40px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-right: 48px;
`

export const CallsTable = styled.table`
  width: 100%;
  background-color: white;
  border-radius: 8px;

  & th,td {
    color: #899CB1;
    padding: 0;
    height: 60px;
    border-bottom: 1px solid #EAF0FA;
  }
  & th {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: left;

    &:hover {
      color: #002CFB;
      cursor: pointer;
    }

    & .sortIcon {
      margin-left: 8px;
      &.isASC svg {
        transform: rotate(180deg);
      }
    }
  }
  & th:last-child, td:last-child {
    width: 400px;
    text-align: right;
    padding-right: 40px;
  }
  & th:first-child, td:first-child {
    width: 60px;
    padding-left: 40px;
  }
  & th:nth-child(2), td:nth-child(2) {
    width: 150px;
    padding-left: 40px;
  }
  & th:nth-child(3), td:nth-child(3) {
    width: 150px;
    padding-left: 40px;
  }
  & tr {
    border-bottom: 1px solid #EAF0FA;
  }


`