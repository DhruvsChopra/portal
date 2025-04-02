import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import TestComp from './TestComp';
const TestCases = ({ codeData }) => {
    const [allPassed, setAllPassed] = useState(false);
    const [currentTestCase, setCurrentTestCase] = useState(0);
    const handleTestClick = (testKaKey) => {
        setCurrentTestCase(testKaKey);
    };
    useEffect(() => {
        if (codeData) {
            setAllPassed(codeData.no_testcases_passed === codeData.result.length);
        }
    }, [codeData]);
    return codeData ? (_jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "grid h-[60vh] w-full grid-rows-[2fr_5fr_2fr]", children: [_jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "m-3 flex w-full items-center justify-between rounded-lg bg-lightGray px-4 py-3", children: _jsxs("div", { children: [_jsxs("p", { className: `${allPassed ? 'text-green2' : 'text-accent'} text-2xl font-medium`, children: [codeData.no_testcases_passed, "/", codeData.result.length, " Test Cases Have Passed ", allPassed ? ' :-)' : " :'-( "] }), _jsx("p", { className: "mt-1 text-sm text-white", children: allPassed ? 'Great Work!!' : 'Try Again!!!' })] }) }) }), _jsx("div", { className: "mx-3 flex justify-center bg-[#161616] py-1 text-white", children: _jsx("div", { className: "flex h-40 w-[40%] flex-col", children: codeData.result.map((item, index) => (_jsx("div", { onClick: () => handleTestClick(index), children: _jsx(TestComp, { isClicked: currentTestCase === index, isPassed: item.status.description === 'Accepted', num: index }) }, index))) }) })] }) })) : null;
};
export default TestCases;
