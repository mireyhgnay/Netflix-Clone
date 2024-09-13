import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

interface IHeaderContainer {
  title: string;
}

export default function Header({ title }: IHeaderContainer) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
