import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../layout/Layout';

interface CartProps extends RouteComponentProps {}

const Cart: FC<CartProps> = () => (
  <Layout>
    <h1>Here's Your Cart</h1>
  </Layout>
);

export default Cart;
