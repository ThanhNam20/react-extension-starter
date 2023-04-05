import React, { Children, ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const MaterLayout = ({ children }: Props) => {
  return (
    <div className="main position-relative shadow">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MaterLayout;
