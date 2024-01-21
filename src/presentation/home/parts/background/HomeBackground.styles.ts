import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  user-select: none;
`;
export const Left = styled(BackgroundWrapper)`
  top: 0;
  left: 0;
`;
export const Right = styled(BackgroundWrapper)`
  right: 0;
  top: 0;
`;
