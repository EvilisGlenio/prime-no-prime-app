import { useCallback, useMemo, useState } from "react";
import * as S from "./styles";

export const PrimeNoPrime = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount: number) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount: number) => prevCount - 1);
  }, []);

  const isPrime = useMemo(() => {
    if (count <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(count); i++) {
      if (count % i === 0) {
        return false;
      }
    }
    return true;
  }, [count]);

  return (
    <S.Container>
      <S.PrimeOrNoPrime>{isPrime && <S.Prime>Prime</S.Prime>}</S.PrimeOrNoPrime>

      <S.NumberContainer {...{ isPrime }}>
        <S.Number>{count}</S.Number>
      </S.NumberContainer>

      <S.ButtonsContainer>
        <S.Button onClick={decrement}>Decrement</S.Button>
        <S.Button onClick={increment}>Increment</S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};
