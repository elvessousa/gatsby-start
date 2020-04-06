import React from 'react';

import '../styles/index.scss';
import Header from './header';
import Footer from '../components/footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
          {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;