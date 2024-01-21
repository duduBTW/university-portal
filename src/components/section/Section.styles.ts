import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: var(--text-800);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: var(--brand-light);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(-40vw - 20px);
    transform: translateY(-50%);
    width: 40vw;
    height: 1px;
    border-radius: 8px;
    background-color: var(--brand-light);
  }
`;
