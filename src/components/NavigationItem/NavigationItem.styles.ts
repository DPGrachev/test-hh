import styled, { css } from 'styled-components'

type Props = {
  isActive : boolean;
}

export const CustomNavigationItem = styled.li<Props>`
  position: relative;
  padding-left: 14px;
  list-style-type: none;
  height: 52px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${(props) => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  rgba(255, 255, 255, 0.6);
  gap: 14px;
  cursor: pointer;
  &:hover {
    background: rgba(216, 228, 251, 0.32);
  };
  ${(props) => props.isActive && css`
    background: rgba(216, 228, 251, 0.32);
    border-left: 3px solid #002CFB;
    &::after {
      content: '';
      position: absolute;
      right: 12px;
      width: 8px;
      height: 8px;
      background: #FFD500;
      border-radius: 50%;
      box-shadow: 0px 3px 8px rgb(237 218 1 / 50%);
    }
  `}
`