import React, { ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const MaterLayout = ({ children }: Props) => {
  return (
    <div className="main position-relative shadow">
      <Header />
      <div id="wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MaterLayout;
