import React, { useEffect } from 'react';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import MaterLayout from '../../containers/MasterLayout/MaterLayout';
import Home from '../home';

export const Popup = () => {
  return (
    <MaterLayout>
      <Router>
        <Home />
      </Router>
    </MaterLayout>
  );
};
