import React from 'react';
import { createRoot } from 'react-dom/client';
import './extension-style.css';
import { Popup } from './Popup';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <QueryClientProvider client={queryClient}>
    <Popup />
  </QueryClientProvider>,
);
