import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem('user'); // replace with real auth logic
    if (!isLoggedIn) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    return children;
};
export default ProtectedRoute;
