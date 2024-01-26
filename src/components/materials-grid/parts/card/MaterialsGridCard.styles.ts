import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const ThumbnailWrapper = styled.div`
  position: relative;
`;
export const Title = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-900);
`;
export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  aspect-ratio: 9 / 13;
  object-fit: contain;
  padding: 20px;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;
export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    ${Thumbnail} {
      box-shadow: 0px 12px 30px 0px #989898;
    }
  }
`;
