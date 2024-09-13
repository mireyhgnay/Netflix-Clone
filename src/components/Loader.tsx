import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

interface ILoader {
  load: boolean;
}

export default function Loader({ load }: ILoader) {
  return (
    <LoaderContainer>
      <ClipLoader color='#fdcb6e' loading={load} size={50} />
    </LoaderContainer>
  );
}
