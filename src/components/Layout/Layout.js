import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routes from '../../routes/Routers';

import Carts from '../UI/cart/Carts.jsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Carts />
      <div>
        <Routes />
      </div>
      ;
      <Footer />
    </div>
  );
};

export default Layout;
