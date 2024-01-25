import styled from "styled-components";

type MaterialItemStyleProps = {
  isActive: boolean;
};

export const Container = styled.ul`
  padding: 8px 0;
`;
export const MaterialItem = styled.li<MaterialItemStyleProps>`
  padding: 8px 16px;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
  color: ${({ isActive }) =>
    isActive ? "var(--text-900)" : "var(--text-800)"};
  line-height: 22px;
  text-transform: capitalize;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
