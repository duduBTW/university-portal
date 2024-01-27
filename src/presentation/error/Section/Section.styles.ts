import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 12px;
  border: 3px solid #faeff1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const Top = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const Description = styled.p`
  color: var(--text-600);
`;
