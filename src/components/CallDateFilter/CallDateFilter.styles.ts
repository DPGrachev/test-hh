import styled from "styled-components";

export const Wrapped = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`

export const CurrentValueButton = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;

  &:hover {
    & svg {
      fill: #005FF8;
    }
  }

  & span {
    color: #002CFB;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`

export const Menu = styled.nav`
  background: #FFFFFF;
  border: 1px solid #EAF0FA;
  box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
  border-radius: 4px;
  position: absolute;
  top: 30px;
  right: 0;
  width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    height: 40px;
    padding: 6px 20px;
    box-sizing: border-box;
    color: #899CB1;

    &:hover {
      background-color: rgba(0, 44, 251, 0.13);
      color: black;
    }
  }
`