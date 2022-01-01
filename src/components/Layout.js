import React from 'react';

import Navbar from './Navbar';
import Footer from '../components/Footer';

function Layout(props) {
  // console.log(props);
  // console.log(character);

  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
