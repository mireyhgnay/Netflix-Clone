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

const IconButton = styled.div`
  color: #fff;
  cursor: pointer;
  svg {
    height: 24px;
  }
`;

export const Search = styled(IconButton)``;

export const Noti = styled(IconButton)``;
