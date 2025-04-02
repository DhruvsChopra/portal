import { jsx as _jsx } from "react/jsx-runtime";
// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './components/RoutesApp';
import './index.css';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(RoutesApp, {}) }) }));
