import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { makeImagePath } from '../../utils';

const SliderContainer = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: #fff;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}

interface SliderProps {
  index: number;
  toggleLeaving: () => void;
  data: Movie[];
  offset: number;
}

export default function Slider({
  index,
  toggleLeaving,
  data,
  offset,
}: SliderProps) {
  return (
    <>
      <SliderContainer>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            key={index}
            variants={rowVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ type: 'tween', duration: 1 }}
          >
            {data
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  key={movie.id}
                  bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                />
              ))}
          </Row>
        </AnimatePresence>
      </SliderContainer>
    </>
  );
}
