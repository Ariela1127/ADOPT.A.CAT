import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../layout/Layout';

interface CatProps extends RouteComponentProps {
  catId?: string;
}

const Cat: FC<CatProps> = ({ catId }) => (
  <Layout>
    <h1>Hi {catId}!</h1>
  </Layout>
);

export default Cat;
