import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mixins } from '../../styles/mixin';
import { Link, LinkProps } from 'react-router-dom';

export const Nav = styled(motion.nav)`
  ${mixins.flexBox('row', 'center', 'space-between')}
  ${mixins.position('fixed', 0)};
  ${mixins.size('100%', '68px')};
  padding: 0 4%;
  font-size: 14px;
  color: ${(props) => props.theme.white.darker};
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
`;

export const NavBox = styled.div`
  ${mixins.flexBox('row', 'center')}

  .rightMenu {
    position: relative;
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const Logo = styled.svg`
  ${mixins.size('95px', '25px')};
  fill: ${(props) => props.theme.red};
  margin-right: 25px;
`;

export const Items = styled.ul`
  display: inline-flex;
`;

export const Item = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

interface ItemLinkProps extends LinkProps {
  isActive: boolean;
}

export const ItemLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ItemLinkProps>`
  color: ${(props) => (props.isActive ? '#fff' : props.theme.white.lighter)};
  font-weight: ${(props) => (props.isActive ? 500 : 'normal')};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.white.darker};
  }
`;

export const Input = styled(motion.input)`
  ${mixins.position('absolute', '-4px', 0)};
  transform-origin: right center;
  padding: 8px 8px 8px 35px;
  z-index: -1;
  color: #fff;
  font-size: 14px;
  background-color: #000;
  border: 1px solid ${(props) => props.theme.white.lighter};
  outline: none;
`;

const IconButton = styled.div`
  color: #fff;
  cursor: pointer;
  svg {
    height: 24px;
  }
`;

export const Search = styled(IconButton)``;

export const Noti = styled(IconButton)``;
