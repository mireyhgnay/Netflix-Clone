import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';
import Header from '../components/Header';

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
    <>
      <Header title={state} />
      {load ? (
        <Loader>
          <ClipLoader color='#fdcb6e' loading={load} size={50} />
        </Loader>
      ) : null}
    </>
  );
}
