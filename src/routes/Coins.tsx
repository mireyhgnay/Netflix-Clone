import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & + & {
    margin-top: 10px;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.pointColor};
    }
  }

  a {
    transition: color 0.2s ease-in;
    display: block;
    color: inherit;
  }

  span {
    font-size: 20px;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<ICoins[]>([]);
  const [load, setLoad] = useState(true);

  // Data Fetch: 100개 데이터 가져오기
  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      const data = json.slice(0, 100);
      setCoins(data);
      setLoad(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>🪙 Coins 🪙</Title>
      </Header>
      {load ? (
        <Loader>
          <ClipLoader color='#fdcb6e' loading={load} size={50} />
        </Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/:${coin.id}`}>{coin.name}</Link>
              <span>👉</span>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
