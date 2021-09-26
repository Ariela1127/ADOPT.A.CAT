import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import { styled } from '../../stitches.config';
import catsData from '../../data/cats.json';

interface CatProps extends RouteComponentProps {
  catId?: string;
}

const CatDetail = styled('section', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: '4rem'
});

const CatPhoto = styled('img', {
  gridArea: '1 / 1 / 6 / 2',
  justifySelf: 'end'
});

const CatHeader = styled('h1', {
  gridArea: '1 / 2 / 2 / 3'
});

const CatDetails = styled('article', {
  gridArea: '2 / 2 / 5 / 3'
});

const Adopt = styled('div', {
  gridArea: '5 / 2 / 6 / 3',
  position: 'relative',
  '& button': {
    position: 'absolute',
    bottom: 0
  }
});

const Cat: FC<CatProps> = ({ catId }) => {
  const cat = catsData.find(c => c.id === Number(catId || -1));

  return cat ? (
    <Layout>
      <CatDetail>
        <CatPhoto src={cat.photoLink} alt={cat.name} />
        <CatHeader>{cat.name}</CatHeader>
        <CatDetails>
          <p>Breed: {cat.breed}</p>
          <p>Sex: {cat.sex}</p>
          <p>Age: {cat.age}</p>
          <p>
            A little bit about {cat.name}: {cat.description}
          </p>
        </CatDetails>
        <Adopt>
          <Button text='Adopt' onClick={() => console.log()} />
        </Adopt>
      </CatDetail>
    </Layout>
  ) : (
    <Layout>
      <h1>Uh Oh!</h1>
      <p>Something went wrong... we can't fid a cat with id {catId}... sorry about that!</p>
    </Layout>
  );
};

export default Cat;
