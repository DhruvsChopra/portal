import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
const RoutesApp = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/*", element: _jsx(App, {}) })] }));
};
export default RoutesApp;
