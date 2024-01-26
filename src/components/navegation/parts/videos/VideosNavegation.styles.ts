import { Link } from "react-router-dom";
import styled from "styled-components";

type VideoStyleProps = {
  isActive: boolean;
};

export const Container = styled.div`
  padding: 8px 0;
`;
export const Video = styled(Link)<VideoStyleProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background-color: ${({ isActive }) => (isActive ? "#faeff1" : "none")};

  &:hover {
    background: ${({ isActive }) => (isActive ? "" : "rgba(0, 0, 0, 0.08)")};
  }
`;
export const Thumbnail = styled.img`
  width: 88px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const Title = styled.div<VideoStyleProps>`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  color: ${({ isActive }) =>
    isActive ? "var(--text-900)" : "var(--text-800)"};
  line-height: 22px;
`;
