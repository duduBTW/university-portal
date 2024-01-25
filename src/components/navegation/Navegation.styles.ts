import styled from "styled-components";

export type ContainerStyleProps = {
  isHome: boolean;
};

export const Container = styled.div<ContainerStyleProps>`
  position: ${({ isHome }) => (isHome ? "fixed" : "sticky")};
  top: 40px;
  margin: 0 20px;
  z-index: 3;
  display: flex;
  gap: 20px;
  align-items: start;
`;

export const NavegationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
