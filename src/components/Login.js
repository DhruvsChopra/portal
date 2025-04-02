import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './indexs.css';
import Landing from './Landing';
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        alert("Cooking...\nLogged in successfully!");
        setTimeout(() => {
            navigate('/'); // Redirect to your main app route
        }, 1000);
    };
    return (_jsx("div", { className: 'container', children: _jsxs(Landing, { children: [_jsx("h1", { className: "header-top", children: "HUMANS PRESENTS" }), _jsxs("div", { className: "content", children: [_jsx("div", { className: "left", children: _jsx("div", { className: "left-top" }) }), _jsx("div", { className: "right", children: _jsx("div", { className: "login-card", children: _jsxs("div", { className: "login-inner", children: [_jsx("h1", { children: "START COOKING" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "email", id: "email", placeholder: "Enter Username", required: true, className: "input-field" }), _jsx("p", { className: "error", id: "error-email" }), _jsxs("div", { className: "password-container", children: [_jsx("input", { type: showPassword ? "text" : "password", name: "password", id: "password", placeholder: "Enter Password", required: true, className: "input-field password-field" }), _jsx("span", { id: "togglePassword", className: "toggle-password", onClick: handleTogglePassword, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: showPassword ? (_jsxs(_Fragment, { children: [_jsx("path", { d: "M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.4 21.4 0 0 1 4.73-5.18" }), _jsx("path", { d: "M22.54 11.46C21.39 9.4 18.83 7 12 7c-1.32 0-2.6.19-3.82.56" }), _jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })] })) : (_jsxs(_Fragment, { children: [_jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] })) }) })] }), _jsx("p", { className: "error", id: "error-password" }), _jsx("button", { type: "submit", className: "btn", id: "loginBtn", disabled: isSubmitting, children: "Login" })] })] }) }) })] }), _jsx("h1", { className: "header-bottom", children: "NOT A COOKING COMPETITION" })] }) }));
};
export default LoginPage;
