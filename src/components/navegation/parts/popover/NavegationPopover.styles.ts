import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  width: 400px;
  border: 2px solid #faeff1;
  transition: margin 0.25s ease;
`;
export const Header = styled.header`
  background-color: #faeff1;
  border-radius: 12px;
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  color: var(--brand);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
`;
