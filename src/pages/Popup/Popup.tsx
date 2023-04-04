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

export const Popup = () => {
  return (
    <>
      <p>This is React extension</p>
    </>
  );
};
