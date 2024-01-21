import { Link } from "react-router-dom";
import styled from "styled-components";

type ContainerStyleProps = {
  isSelected: boolean;
};

export const ThumbnailWrapper = styled.div`
  position: relative;
`;
export const Thumbnail = styled.img`
  max-width: min(calc(100vw - 40px), 400px);
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom center;
`;
export const Title = styled.p`
  color: var(--text-900);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  max-width: 400px;
  text-align: center;
  white-space: nowrap;
`;
export const Container = styled(Link).withConfig({
  shouldForwardProp: (prop) => {
    switch (prop as keyof ContainerStyleProps) {
      case "isSelected": {
        return false;
      }
      default: {
        return true;
      }
    }
  },
})<ContainerStyleProps>`
  all: unset;
  flex-shrink: 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;

  &:hover {
    ${Thumbnail} {
      box-shadow: ${({ isSelected }) =>
        isSelected ? "0px 12px 30px 0px #989898" : "none"};
    }
  }
`;
