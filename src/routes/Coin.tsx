import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';

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

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

interface ILocation {
  state: string;
}

export default function Coin() {
  const [load, setLoad] = useState(true);

  const { state } = useLocation() as ILocation;

  return (
    <Container>
      <Header>
        <Title>{state}</Title>
      </Header>
      {load ? (
        <Loader>
          <ClipLoader color='#fdcb6e' loading={load} size={50} />
        </Loader>
      ) : null}
    </Container>
  );
}
