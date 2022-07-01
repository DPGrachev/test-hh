import styled from 'styled-components'

export const Row = styled.tr`
  &:hover {
    background-color: rgba(212, 223, 243, 0.17);
    cursor: pointer;
  }
`
export const DownloadButton = styled.button`
  height: 48px;
  background: #EAF0FA;
  border: none;
  border-radius: 48px;
  &:hover {
    box-shadow: 0px 0px 3px #000000;
    cursor: pointer;
  }
`

export const Audio = styled.audio`
  height: 48px;
  &::-webkit-media-controls-panel {
    background-color: #EAF0FA;
  }
`