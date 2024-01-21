import styled from "styled-components";
import Button from "../button/Button";

type StyledSlideInButtonStyleProps = {
  isActive: boolean;
};

export const StyledSlideInButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => {
    switch (prop as keyof StyledSlideInButtonStyleProps) {
      case "isActive": {
        return false;
      }

      default: {
        return true;
      }
    }
  },
})<StyledSlideInButtonStyleProps>`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: calc(100% - 24px);
  box-sizing: border-box;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s cubic-bezier(0.2, 0, 0.4, 1);
  pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};
  transform: ${({ isActive }) =>
    isActive ? "translateY(0px)" : "translateY(14px)"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;
