import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  max-width: 1200px;
  width: 100%;
  padding: 40px 20px;
  margin-left: auto;
`;
export const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;
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
export const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;
export const Title = styled.h3`
  color: var(--text-900);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px;
  margin-top: 16px;
`;
export const ProfessorName = styled.h4`
  color: var(--text-600);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;
`;
export const Description = styled.h4`
  color: var(--text-800);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.02);
  margin-top: 16px;
`;
