import React, { Children, ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

type Props = {
  children: ReactNode;
};

const MaterLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MaterLayout;
