import { Link } from "react-router-dom";
import styled from "styled-components";

type MaterialItemStyleProps = {
  isActive: boolean;
};

export const Container = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`;
export const MaterialItem = styled(Link)<MaterialItemStyleProps>`
  padding: 8px 16px;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
  color: ${({ isActive }) =>
    isActive ? "var(--text-900)" : "var(--text-800)"};
  background-color: ${({ isActive }) => (isActive ? "#faeff1" : "none")};

  line-height: 22px;
  text-transform: capitalize;

  &:hover {
    background: ${({ isActive }) => (isActive ? "" : "rgba(0, 0, 0, 0.08)")};
  }
`;
