import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { mixins } from '../../styles/mixin';
import styled from 'styled-components';

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

export default function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();

  const toggleSearch = () => {
    const scaleValue = searchOpen ? 0 : 1;
    inputAnimation.start({ scaleX: scaleValue });
    setSearchOpen((prev) => !prev);
  };

  return (
    <>
      <motion.svg
        onClick={toggleSearch}
        animate={{ x: searchOpen ? -160 : 0 }}
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
        type='text'
        animate={inputAnimation}
        initial={{ scaleX: 0 }}
        transition={{ type: 'linear' }}
        placeholder='제목, 장르'
      />
    </>
  );
}
