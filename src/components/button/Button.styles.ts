import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  color: var(--text-900);
  background-color: #f4f4f4;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 24px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    background-color: #1a1a1a;
    color: white;
  }
`;
