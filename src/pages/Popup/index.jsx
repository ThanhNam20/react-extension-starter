import React from 'react';
import { createRoot } from 'react-dom/client';
import './extension-style.css';
import { Popup } from './Popup';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup />);
