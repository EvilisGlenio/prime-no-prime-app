import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  justify-content: space-between;
  align-items: center;

  background-color: #1f2937;
  border-radius: 8px;
  padding: 25px 0;
`;

export const PrimeOrNoPrime = styled.div`
  position: absolute;
  top: -25%;

  width: 50%;

  text-align: center;
  padding: 10px 0;

  span {
    font-size: large;
    font-weight: 700;
  }
`;

export const Prime = styled.span`
  color: #064e3b;
`;

export const NumberContainer = styled.div<{ isPrime: boolean }>`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  box-shadow: 1px 2px 20px ${({ isPrime }) => (isPrime ? "#10b981" : "#f3f4f6")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.h1`
  font-size: 70px;
  line-height: 20px;
  color: #f3f4f6;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  font-size: large;
  line-height: 24px;
  color: #f3f4f6;
  border-radius: 8px;
  background-color: #1f2937;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #374151;
  }
`;
