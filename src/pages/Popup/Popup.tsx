import React, { useContext, useEffect } from 'react';
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
import Account from '../Account';
import { AppContext } from '../../contexts/app.context';

export const Popup = () => {
  const { profile } = useContext(AppContext);
  return (
    <MaterLayout>
      <Router>
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <ForgotPassword /> */}
        <Account />
      </Router>
    </MaterLayout>
  );
};
