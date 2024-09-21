import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atom';

const HeaderContainer = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeButton = styled(Link)<{ isBack?: boolean }>`
  visibility: ${({ isBack }) => (isBack ? 'visible' : 'hidden')};
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: ${(props) => props.theme.darkButtonColor};
`;

const DarkToggleButton = styled.button`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.darkButtonColor};
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

interface IHeaderContainer {
  title?: string;
  isBack?: boolean;
}

export default function Header({ title, isBack }: IHeaderContainer) {
  const isDark = useRecoilState(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return (
    <HeaderContainer>
      <HomeButton to='/' isBack={isBack}>
        <IoChevronBackOutline size='30' color='#fdcb6e' />
      </HomeButton>

      <Title>{title || 'Coin'}</Title>

      <DarkToggleButton onClick={toggleDarkAtom}>
        {isDark[0] ? '☀️' : '🌙'}
      </DarkToggleButton>
    </HeaderContainer>
  );
}
