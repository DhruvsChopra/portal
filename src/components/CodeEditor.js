import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import SelectLanguages from './SelectLanguages';
import boilerplates from '../data/boilerplates.json';
import toast from 'react-hot-toast';
import SubmitCodeWindow from './SubmitCodeWindow'; // Import the results window
const CodeEditor = ({ handleRun, isRunClicked, setisRunClicked, setlatestClicked, selectedquestionId, }) => {
    const [sourceCode, setSourceCode] = useState('');
    const [languageId, setLanguageId] = useState(71);
    const editorRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [taskResult, setTaskResult] = useState(null); // State for results
    const localStorageCodeKey = `code-${selectedquestionId}-${languageId}`;
    const localStorageLanguageKey = `language-${selectedquestionId}`;
    // Static test case data for demonstration
    const staticRunResult = {
        testcases: [
            { testcase_id: "1", status: "success", description: "Output matches expected" },
            { testcase_id: "2", status: "failed", description: "Wrong output" },
            { testcase_id: "3", status: "success", description: "Correct result" },
        ],
        testcases_passed: 2,
        testcases_failed: 1,
    };
    const staticSubmitResult = {
        testcases: [
            { testcase_id: "1", status: "success", description: "All conditions met" },
            { testcase_id: "2", status: "success", description: "Edge case passed" },
            { testcase_id: "3", status: "failed", description: "Timeout exceeded" },
        ],
        testcases_passed: 2,
        testcases_failed: 1,
    };
    useEffect(() => {
        const savedLanguageId = localStorage.getItem(localStorageLanguageKey);
        if (savedLanguageId) {
            const parsedLanguageId = parseInt(savedLanguageId);
            setLanguageId(parsedLanguageId);
            setSourceCode(boilerplates[parsedLanguageId.toString()] ?? boilerplates['71']);
        }
        else {
            setLanguageId(71);
            localStorage.setItem(localStorageLanguageKey, '71');
            setSourceCode(boilerplates['71']);
            localStorage.setItem(localStorageCodeKey, boilerplates['71']);
        }
        const savedCode = localStorage.getItem(localStorageCodeKey);
        if (savedCode)
            setSourceCode(savedCode);
    }, [selectedquestionId, localStorageCodeKey, localStorageLanguageKey]);
    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };
    const handleOnChange = (value) => {
        if (value) {
            setSourceCode(value);
            localStorage.setItem(localStorageCodeKey, value);
        }
    };
    const handleLanguageChange = (id) => {
        setLanguageId(id);
        setSourceCode(boilerplates[id.toString()] ?? boilerplates['71']);
        localStorage.setItem(localStorageLanguageKey, id.toString());
    };
    const handleRunCode = () => {
        setisRunClicked(true);
        setlatestClicked('run');
        // Simulate running the code with static data
        handleRun({ source_code: sourceCode, language_id: languageId, question_id: selectedquestionId });
        setTaskResult(staticRunResult); // Set static run result
        setTimeout(() => setisRunClicked(false), 1000);
    };
    const handleSubmitCode = () => {
        setIsSubmitting(true);
        setisRunClicked(true);
        setlatestClicked('submit');
        // Simulate submitting the code with static data
        setTaskResult(staticSubmitResult); // Set static submit result
        toast.success('Code submitted successfully!');
        setTimeout(() => {
            setIsSubmitting(false);
            setisRunClicked(false);
        }, 1000);
    };
    return (_jsx("div", { className: "flex items-center justify-center bg-[#131313]", children: _jsxs("div", { className: "w-full p-4", children: [_jsxs("div", { className: "mb-4 flex items-center text-xl text-white", children: ["Languages:", _jsx("div", { className: "w-[150px] pl-4", children: _jsx(SelectLanguages, { value: languageId, onChange: handleLanguageChange }) })] }), _jsx("div", { className: "flex rounded-3xl", children: _jsx(Editor, { theme: "vs-dark", height: "50vh", defaultLanguage: "python", language: handleSyntax(languageId), value: sourceCode, onMount: handleEditorDidMount, onChange: handleOnChange, options: { minimap: { enabled: false } } }) }), _jsxs("div", { className: "mt-4 flex w-full justify-end space-x-4", children: [_jsx("button", { onClick: handleRunCode, className: "rounded bg-gray-900 px-4 py-2 text-white hover:bg-accent hover:text-white disabled:bg-[#24242488] disabled:text-[#ffffff85]", disabled: isRunClicked, children: isRunClicked ? 'Cooking...' : 'Run Code' }), _jsx("button", { className: `rounded py-2 text-white bg-gray-900 ${isSubmitting ? 'bg-gray-500' : 'bg-accent'} w-28 hover:bg-dark2 hover:text-cream`, onClick: handleSubmitCode, disabled: isSubmitting, children: isSubmitting ? 'Cooking...' : 'Submit Code' })] }), taskResult && _jsx(SubmitCodeWindow, { taskres: taskResult })] }) }));
};
const handleSyntax = (id) => {
    switch (id) {
        case 71: return 'python';
        case 62: return 'java';
        case 50: return 'c';
        case 54: return 'cpp';
        case 63: return 'javascript';
        case 73: return 'rust';
        case 60: return 'go';
        default: return 'plaintext';
    }
};
export default CodeEditor;
