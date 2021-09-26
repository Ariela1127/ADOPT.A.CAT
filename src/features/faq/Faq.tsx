import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../layout/Layout';

interface FaqProps extends RouteComponentProps {}

const Faq: FC<FaqProps> = () => (
  <Layout>
    <h1>FAQ</h1>
  </Layout>
);

export default Faq;
