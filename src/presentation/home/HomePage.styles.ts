import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 68px;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 2;
`;
export const Tooltip = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  padding: 8px 12px 6px;
  border-radius: 999px;
  white-space: nowrap;
  border: 1px solid var(--brand-light);
  color: var(--brand);
  width: min-content;
`;
export const Title = styled.h1`
  color: var(--text-900);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;
export const Description = styled.p`
  color: var(--text-700);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  max-width: 80ch;
`;
export const Left = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
`;
export const Right = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  pointer-events: none;
  user-select: none;
`;
