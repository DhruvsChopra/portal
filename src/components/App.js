import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import QuesNavbar from './QuesNavbar';
import QuestionComponent from './QuestionComponent';
import EditorWindow from './EditorWindow';
import { staticQuestions } from '../data/staticQuestions';
const App = () => {
    const [, setTimeOver] = useState(false);
    const [questions] = useState(staticQuestions);
    const [selectedQuestionId, setSelectedQuestionId] = useState(questions[0]?.ID || '');
    const handleSelectedQuestionId = (id) => {
        setSelectedQuestionId(id);
    };
    return (_jsxs("main", { className: "overflow-y-hidden", children: [_jsx(QuesNavbar, { setTimeOver: setTimeOver }), _jsxs("div", { className: "flex bg-dark2", children: [_jsx(QuestionComponent, { questions: questions, setQuestions: () => { }, onQuestionSelect: handleSelectedQuestionId }), _jsx(EditorWindow, { selectedQuestionId: selectedQuestionId })] })] }));
};
export default App;
