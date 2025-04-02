import React, { useState, useRef, useEffect } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import SelectLanguages from './SelectLanguages';
import boilerplates from '../data/boilerplates.json';
import toast from 'react-hot-toast';
import SubmitCodeWindow from './SubmitCodeWindow'; // Import the results window

interface RunCodeParams {
  source_code: string;
  language_id: number;
  question_id: string;
}

interface TaskResult {
  testcases: { testcase_id: string; status: string; description: string }[];
  testcases_passed: number;
  testcases_failed: number;
}

interface ChildComponentProps {
  handleRun: (params: RunCodeParams) => void; // No longer needs to return a promise
  isRunClicked: boolean;
  setisRunClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setlatestClicked: React.Dispatch<React.SetStateAction<string | null>>;
  selectedquestionId: string;
  latestClicked: string | null;
}

const CodeEditor: React.FC<ChildComponentProps> = ({
  handleRun,
  isRunClicked,
  setisRunClicked,
  setlatestClicked,
  selectedquestionId,
 
}) => {
  const [sourceCode, setSourceCode] = useState<string>('');
  const [languageId, setLanguageId] = useState<number>(71);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [taskResult, setTaskResult] = useState<TaskResult | null>(null); // State for results

  const localStorageCodeKey = `code-${selectedquestionId}-${languageId}`;
  const localStorageLanguageKey = `language-${selectedquestionId}`;

  // Static test case data for demonstration
  const staticRunResult: TaskResult = {
    testcases: [
      { testcase_id: "1", status: "success", description: "Output matches expected" },
      { testcase_id: "2", status: "failed", description: "Wrong output" },
      { testcase_id: "3", status: "success", description: "Correct result" },
    ],
    testcases_passed: 2,
    testcases_failed: 1,
  };

  const staticSubmitResult: TaskResult = {
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
      setSourceCode((boilerplates as Record<string, string>)[parsedLanguageId.toString()] ?? boilerplates['71']);
    } else {
      setLanguageId(71);
      localStorage.setItem(localStorageLanguageKey, '71');
      setSourceCode(boilerplates['71']);
      localStorage.setItem(localStorageCodeKey, boilerplates['71']);
    }
    const savedCode = localStorage.getItem(localStorageCodeKey);
    if (savedCode) setSourceCode(savedCode);
  }, [selectedquestionId, localStorageCodeKey, localStorageLanguageKey]);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleOnChange = (value: string | undefined) => {
    if (value) {
      setSourceCode(value);
      localStorage.setItem(localStorageCodeKey, value);
    }
  };

  const handleLanguageChange = (id: number) => {
    setLanguageId(id);
    setSourceCode((boilerplates as Record<string, string>)[id.toString()] ?? boilerplates['71']);
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

  return (
    <div className="flex items-center justify-center bg-[#131313]">
      <div className="w-full p-4">
        <div className="mb-4 flex items-center text-xl text-white">
          Languages:
          <div className="w-[150px] pl-4">
            <SelectLanguages value={languageId} onChange={handleLanguageChange} />
          </div>
        </div>
        <div className="flex rounded-3xl">
          <Editor
            theme="vs-dark"
            height="50vh"
            defaultLanguage="python"
            language={handleSyntax(languageId)}
            value={sourceCode}
            onMount={handleEditorDidMount}
            onChange={handleOnChange}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <div className="mt-4 flex w-full justify-end space-x-4">
          <button
            onClick={handleRunCode}
            className="rounded bg-gray-900 px-4 py-2 text-white hover:bg-accent hover:text-white disabled:bg-[#24242488] disabled:text-[#ffffff85]"
            disabled={isRunClicked}
          >
            {isRunClicked ? 'Cooking...' : 'Run Code'}
          </button>
          <button
            className={`rounded py-2 text-white bg-gray-900 ${isSubmitting ? 'bg-gray-500' : 'bg-accent'} w-28 hover:bg-dark2 hover:text-cream`}
            onClick={handleSubmitCode}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Cooking...' : 'Submit Code'}
          </button>
        </div>
        {/* Render the results window if taskResult exists */}
        {taskResult && <SubmitCodeWindow taskres={taskResult} />}
      </div>
    </div>
  );
};

const handleSyntax = (id: number): string => {
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