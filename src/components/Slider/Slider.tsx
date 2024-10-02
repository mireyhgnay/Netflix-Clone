import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: #fff;
  height: 200px;
  color: red;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

export default function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <SliderContainer>
        <AnimatePresence>
          <Row
            key={index}
            variants={rowVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ type: 'tween', duration: 1 }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box key={i}>{i}</Box>
            ))}
          </Row>
        </AnimatePresence>
      </SliderContainer>
    </>
  );
}
