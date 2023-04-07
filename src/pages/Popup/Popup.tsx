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
import Login from '../Login';
import Register from '../Register';
import ForgotPassword from '../ForgotPassword';

export const Popup = () => {
  return (
    <MaterLayout>
      <Router>
        <Home />
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <ForgotPassword /> */}
      </Router>
    </MaterLayout>
  );
};
