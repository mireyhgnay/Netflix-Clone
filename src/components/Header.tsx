import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoChevronBackOutline } from 'react-icons/io5';

const HeaderContainer = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HomeButton = styled(Link)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: tra;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

interface IHeaderContainer {
  title?: string;
  isBack?: boolean;
}

export default function Header({ title, isBack }: IHeaderContainer) {
  return (
    <HeaderContainer>
      {isBack && (
        <HomeButton to='/'>
          <IoChevronBackOutline size='30' color='#fdcb6e' />
        </HomeButton>
      )}
      <Title>{title || 'Coin'}</Title>
    </HeaderContainer>
  );
}
