import styled from "styled-components";

export const MediaError = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;
