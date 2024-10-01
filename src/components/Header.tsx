import styled from 'styled-components';
import { mixins } from '../styles/mixin';
import { Link, useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';

const Nav = styled(motion.nav)`
  ${mixins.flexBox('row', 'center', 'space-between')}
  ${mixins.position('fixed', 0)};
  ${mixins.size('100%', '68px')};
  padding: 0 4%;
  font-size: 14px;
  color: ${(props) => props.theme.white.darker};
`;

const NavBox = styled.div`
  ${mixins.flexBox('row', 'center')}

  .rightMenu {
    position: relative;
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const Logo = styled.svg`
  ${mixins.size('95px', '25px')};
  fill: ${(props) => props.theme.red};
  margin-right: 25px;
`;

const Items = styled.ul`
  display: inline-flex;
`;

const Item = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

const ItemLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#fff' : props.theme.white.lighter)};
  font-weight: ${(props) => (props.isActive ? 500 : 'normal')};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.white.darker};
  }
`;

const Search = styled.div`
  color: #fff;
  cursor: pointer;

  svg {
    height: 24px;
  }
`;

const Noti = styled.div`
  color: #fff;
  cursor: pointer;

  svg {
    height: 24px;
  }
`;

const Input = styled(motion.input)`
  ${mixins.position('absolute', undefined, 0)};
  transform-origin: right center;
  height: 25px;
  padding-left: 35px;
  z-index: -1;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
  outline: none;
`;

const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

export default function Header() {
  const homeMatch = useMatch('/');
  const tvMatch = useMatch('/tv');
  const mvMatch = useMatch('/musicvideo');
  const newMatch = useMatch('/new');
  const likeMatch = useMatch('/like');

  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={'top'}>
      <NavBox>
        <Link to='/' aria-label='넷플릭스'>
          <Logo
            xmlns='http://www.w3.org/2000/svg'
            width='1024'
            height='276.742'
            viewBox='0 0 1024 276.742'
          >
            <path d='M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z' />
          </Logo>
        </Link>
        <Items>
          <Items>
            <Item>
              <ItemLink to='/' isActive={homeMatch !== null}>
                홈
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to='/tv' isActive={tvMatch !== null}>
                예능
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to='/musicvideo' isActive={mvMatch !== null}>
                뮤직비디오
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to='/new' isActive={newMatch !== null}>
                NEW! 요즘 대세 콘텐츠
              </ItemLink>
            </Item>
            <Item>
              <ItemLink to='/like' isActive={likeMatch !== null}>
                내가 찜한 리스트
              </ItemLink>
            </Item>
          </Items>
        </Items>
      </NavBox>
      <NavBox>
        <Search className='rightMenu' role='button' aria-label='검색'>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -158 : 0 }}
            transition={{ type: 'linear' }}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </motion.svg>
          <Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: 'linear' }}
            placeholder='제목, 장르'
          />
        </Search>
        <Noti className='rightMenu' role='button' aria-label='알림'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            role='img'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            data-icon='BellStandard'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z'
              fill='currentColor'
            ></path>
          </svg>
        </Noti>
      </NavBox>
    </Nav>
  );
}
