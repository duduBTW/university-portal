import styled, { css } from "styled-components";

type ContainerStyleProps = {
  isActive: boolean;
};

export const Container = styled.div<ContainerStyleProps>(({ isActive }) => {
  return css`
    flex-shrink: 0;
    font-size: 20px;
    border-radius: 12px;
    background: ${isActive ? "#FAEFF1" : "#f4f4f4"};
    color: ${isActive ? "var(--brand)" : "var(--text-800)"};
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  `;
});
