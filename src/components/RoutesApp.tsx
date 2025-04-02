// RoutesApp.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/App" element={<App />} />
    </Routes>
  );
};

export default RoutesApp;
