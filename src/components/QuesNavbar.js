import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const QuesNavbar = ({ setTimeOver }) => {
    const handleEndTest = () => {
        localStorage.clear();
        setTimeOver(true); // Simulate test end
    };
    return (_jsxs("div", { className: "flex h-[17vh] w-screen flex-row items-center justify-between border-b-2 border-cream bg-black px-10 2xl:h-[14vh]", children: [_jsx("div", {}), _jsx("div", { className: "flex w-full flex-col items-center", children: _jsxs("div", { className: "flex w-fit flex-col", children: [_jsx("div", { children: _jsx("span", { className: "mr-8 text-7xl text-amber-50  ", children: "Code here" }) }), _jsx("div", { className: "flex items-center gap-52" })] }) }), _jsx("div", { children: _jsx("button", { onClick: handleEndTest, className: "whitespace-nowrap rounded-md bg-dark2 p-2 px-10 text-lg text-white hover:bg-accent hover:text-gray-600 font-[s-sling]", children: "End Test" }) }), _jsx("div", {})] }));
};
export default QuesNavbar;
