import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
const QuestionComponent = ({ questions, onQuestionSelect }) => {
    const [selectedQuestionId, setSelectedQuestionId] = useState(questions[0]?.ID || '');
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);
    const handleQuestionChange = (id, index) => {
        setSelectedQuestionId(id);
        onQuestionSelect(id);
        setSelectedQuestionIndex(index);
    };
    useEffect(() => {
        const temp = questions.find((question) => question.ID === selectedQuestionId);
        setSelectedQuestion(temp);
    }, [questions, selectedQuestionId]);
    return (_jsxs("div", { className: "flex h-[83vh] w-[45%] flex-row overflow-y-scroll bg-gray-800 2xl:h-[86vh]", children: [_jsx("div", { className: "sticky top-0 flex flex-col text-white", children: questions.map((question, index) => (_jsx("button", { onClick: () => handleQuestionChange(question.ID, index), className: `flex h-full items-center justify-center border-b border-gray-700 px-4 text-center text-xl last:border-0 hover:bg-dark ${question.ID === selectedQuestionId ? 'bg-gray1' : 'bg-black'}`, children: index + 1 }, index))) }), _jsx("div", { className: "ml-2 w-screen text-white", children: selectedQuestion && (_jsxs("div", { className: "p-4 pr-5", children: [_jsxs("span", { className: "text-3xl font-bold text-accent", children: ["PROBLEM ", selectedQuestionIndex + 1, ": ", selectedQuestion.Title] }), _jsxs("div", { className: "w-[80px] bg-lightcream2 text-center text-sm text-lightcream", children: [selectedQuestion.Points, " Points"] }), _jsx("div", { className: "my-5", children: _jsx("span", { className: "mr-8 text-xl text-accent", children: "Problem" }) }), _jsx("div", { className: "markdown", children: _jsx(Markdown, { children: selectedQuestion.Description }) }), selectedQuestion.InputFormat && (_jsxs("div", { children: [_jsx("span", { className: "mr-8 text-xl text-accent", children: "Input Format:" }), _jsx("div", { className: "markdown", children: _jsx(Markdown, { children: selectedQuestion.InputFormat.map((item) => `- ${item}`).join('\n') }) })] })), selectedQuestion.Constraints && (_jsxs("div", { children: [_jsx("div", { className: "mr-8 text-xl text-accent", children: "Constraints:" }), _jsx("div", { className: "markdown", children: _jsx(Markdown, { children: selectedQuestion.Constraints.map((item) => `- ${item}`).join('\n') }) })] })), selectedQuestion.OutputFormat && (_jsxs("div", { children: [_jsx("div", { className: "mr-8 text-xl text-accent", children: "Output Format:" }), _jsx("div", { className: "mt-4", children: _jsx(Markdown, { children: selectedQuestion.OutputFormat.map((item) => `- ${item}`).join('\n') }) })] })), (() => {
                            const sampleCount = Math.max(selectedQuestion.SampleTestInput?.length || 0, selectedQuestion.SampleTestOutput?.length || 0, selectedQuestion.Explanation?.length || 0);
                            return Array.from({ length: sampleCount }).map((_, i) => (_jsxs("div", { children: [selectedQuestion.SampleTestInput?.[i] && (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "mb-4 mr-8 text-xl text-accent", children: ["Sample Input ", i + 1, ":"] }), _jsx(SyntaxHighlighter, { language: "plaintext", style: vscDarkPlus, className: "my-4 rounded-md", children: selectedQuestion.SampleTestInput[i] })] })), selectedQuestion.SampleTestOutput?.[i] && (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "mb-4 mr-8 text-xl text-accent", children: ["Sample Output ", i + 1, ":"] }), _jsx(SyntaxHighlighter, { language: "plaintext", style: vscDarkPlus, className: "my-2 rounded-md", children: selectedQuestion.SampleTestOutput[i] })] })), selectedQuestion.Explanation?.[i] && (_jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "mb-4 mr-8 text-xl text-accent", children: ["Explanation ", i + 1, ":"] }), _jsx(Markdown, { children: selectedQuestion.Explanation[i] })] }))] }, i)));
                        })()] })) })] }));
};
export default QuestionComponent;
