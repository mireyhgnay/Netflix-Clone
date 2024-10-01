import { Link, useLocation } from 'react-router-dom';
import { useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  Item,
  ItemLink,
  Items,
  Nav,
  NavBox,
  Noti,
  Search,
} from './Header.styles';
import LogoSvg from './Logo';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg';
import SearchBar from './SearchBar';

const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
};

const navItems = [
  { path: '/', label: '홈' },
  { path: '/tv', label: '예능' },
  { path: '/musicvideo', label: '뮤직비디오' },
  { path: '/new', label: 'NEW! 요즘 대세 콘텐츠' },
  { path: '/like', label: '내가 찜한 리스트' },
];

export default function Header() {
  const location = useLocation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    navAnimation.start(latest < 0.1 ? 'top' : 'scroll');
  });

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={'top'}>
      <NavBox>
        <Link to='/' aria-label='넷플릭스'>
          <LogoSvg />
        </Link>
        <Items>
          {navItems.map(({ path, label }) => (
            <Item key={path}>
              <ItemLink to={path} isActive={location.pathname === path}>
                {label}
              </ItemLink>
            </Item>
          ))}
        </Items>
      </NavBox>

      <NavBox>
        <Search className='rightMenu' role='button' aria-label='검색'>
          <SearchBar />
        </Search>
        <Noti className='rightMenu' role='button' aria-label='알림'>
          <NotificationIcon />
        </Noti>
      </NavBox>
    </Nav>
  );
}
