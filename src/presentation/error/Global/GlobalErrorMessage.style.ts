import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  height: 100vh;
  text-align: center;
`;

export const Description = styled.p`
  max-width: 54ch;
  color: var(--text-700);
  font-size: 14px;
  margin-top: 4px;
`;
