import { FC } from 'react';
import { useNavigate, RouteComponentProps } from '@reach/router';
import { FaCat as CatIcon } from 'react-icons/fa';
import { styled } from '../../stitches.config';
import kittens from '../../data/kittens.json';
import Layout from '../layout/Layout';

interface HomeProps extends RouteComponentProps {}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center'
  alignItems: 'center'
});

const CatsList = styled('article', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gridGap: '1rem',
  justifyItems: 'center',
  width: '100%'
});

const CatLink = styled('div', {
  position: 'relative',
  '& img': {
    borderRadius: '50%'
  },
  '& span': {
    textTransform: 'uppercase',
    fontSize: 'xx-large',
    visibility: 'hidden',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgb($red)'
  },
  '& p': {
    textAlign: 'center',
    fontSize: 'larger'
  },
  '&:hover': {
    cursor: 'pointer',
    '& span': {
      visibility: 'visible'
    }
  }
});

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <h1>
          Check Out Our <CatIcon />!
        </h1>
        <CatsList>
          {kittens.map(kitten => (
            <CatLink key={kitten.id} onClick={() => navigate(`/cat/${kitten.id}`)}>
              <img src={kitten.photoLink} alt={kitten.name} />
              <span>Adopt Now</span>
              <p>{kitten.name}</p>
            </CatLink>
          ))}
        </CatsList>
      </Container>
    </Layout>
  );
};
export default Home;
