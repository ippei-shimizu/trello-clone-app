import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';

const root = document.getElementById("root");
render(<App />, root);
