import { useParams } from 'react-router-dom';

export default function Coin() {
  const params = useParams();
  const coinId = params.coinId as string;

  return <h1>Coin : {coinId}</h1>;
}
