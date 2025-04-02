import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
const EditorWindow = ({ selectedQuestionId }) => {
    const [isRunClicked, setIsRunClicked] = useState(false);
    const [, setCodeData] = useState(null);
    const [latestClicked, setLatestClicked] = useState(null);
    useEffect(() => {
        setCodeData(null);
    }, [selectedQuestionId]);
    const handleRun = async ({ source_code, // We'll use this now
    language_id, question_id, }) => {
        setIsRunClicked(true);
        // Simulate run with static data, using source_code to log or process
        console.log(`Running code: ${source_code} in language ${language_id} for question ${question_id}`);
        const mockResult = {
            no_testcases_passed: 1,
            result: [
                {
                    testcase_id: 'tc1',
                    stdout: '9',
                    expected_output: '9',
                    input: '2 7 11 15\n9',
                    time: '0.1',
                    memory: 1024,
                    stderr: '',
                    token: 'mock-token',
                    message: '',
                    status: { id: 3, description: 'Accepted' },
                    compile_output: '',
                },
            ],
        };
        setTimeout(() => {
            setCodeData(mockResult);
            setLatestClicked('run');
            setIsRunClicked(false);
        }, 1000);
    };
    return (_jsx("div", { className: "h-[83vh] w-[55%] overflow-y-auto bg-[#131313] px-3 2xl:h-[86vh]", children: _jsx(CodeEditor, { selectedquestionId: selectedQuestionId, isRunClicked: isRunClicked, setisRunClicked: setIsRunClicked, handleRun: handleRun, latestClicked: latestClicked, setlatestClicked: setLatestClicked }) }));
};
export default EditorWindow;
