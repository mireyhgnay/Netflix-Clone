import { useQuery } from 'react-query';
import { getMovies, IGetMoviesResult } from '../api';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { mixins } from '../styles/mixin';
import Slider from '../components/Slider/Slider';
import { useState } from 'react';

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;
const Loader = styled.div`
  ${mixins.flexBox('row', 'center', 'center')}
  height: 100vh;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  ${mixins.flexBox('column', undefined, 'center')}
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 900;
`;

const Overview = styled.p`
  width: 40%;
  font-size: 1.2vw;
  margin-top: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );
  const offset = 6;
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;

      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
            onClick={incraseIndex}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider
            index={index}
            data={data?.results || []}
            offset={offset}
            toggleLeaving={toggleLeaving}
          />
        </>
      )}
    </Wrapper>
  );
}
