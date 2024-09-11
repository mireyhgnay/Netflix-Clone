import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
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

const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

export default function Coins() {
  return (
    <Container>
      <Header>
        <Title>🪙 Coins 🪙</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/:${coin.id}`}>{coin.name}</Link>
            <span>👉</span>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
