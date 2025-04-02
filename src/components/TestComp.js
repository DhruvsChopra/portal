import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gCheck from '../assets/gCheck.png'; // Adjust path
import rCross from '../assets/rCross.png';
const TestComp = ({ isPassed, num, isClicked }) => {
    return (_jsxs("div", { className: `mx-3 my-2 flex h-14 cursor-pointer items-center justify-evenly rounded-lg border-2 bg-black px-4 py-3 text-center ${isClicked && isPassed ? 'border-green2' : isClicked && !isPassed ? 'border-accent' : 'border-dark'}`, children: [_jsx("img", { src: isPassed ? gCheck : rCross, alt: isPassed ? 'green check' : 'red cross', className: "w-4.5 h-4.5" }), _jsxs("p", { className: "mx-1 text-base", children: ["Test Case ", num + 1] })] }));
};
export default TestComp;
