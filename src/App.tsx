import { FC } from 'react';
import { Router } from '@reach/router';
import Home from './features/home/Home';
import Faq from './features/faq/Faq';
import Cart from './features/cart/Cart';
import Cat from './features/cat/Cat';

const App: FC = () => (
  <Router>
    <Home path='/' />
    <Faq path='/faq' />
    <Cart path='/cart' />
    <Cat path='/cat/:catId' />
  </Router>
);

export default App;
