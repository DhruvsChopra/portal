import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

// Define the RunData interface to replace 'any'
interface RunData {
  no_testcases_passed: number;
  result: Array<{
    testcase_id: string;
    stdout: string;
    expected_output: string;
    input: string;
    time: string;
    memory: number;
    stderr: string;
    token: string;
    message: string;
    status: { id: number; description: string };
    compile_output: string;
  }>;
}

interface EditorWindowProps {
  selectedQuestionId: string;
}

const EditorWindow: React.FC<EditorWindowProps> = ({ selectedQuestionId }) => {
  const [isRunClicked, setIsRunClicked] = useState<boolean>(false);
  const [,setCodeData] = useState<RunData | null>(null);
  const [latestClicked, setLatestClicked] = useState<string | null>(null);

  useEffect(() => {
    setCodeData(null);
  }, [selectedQuestionId]);

  const handleRun = async ({
    source_code, // We'll use this now
    language_id,
    question_id,
  }: { source_code: string; language_id: number; question_id: string }) => {
    setIsRunClicked(true);
    // Simulate run with static data, using source_code to log or process
    console.log(`Running code: ${source_code} in language ${language_id} for question ${question_id}`);
    const mockResult: RunData = {
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

  return (
    <div className="h-[83vh] w-[55%] overflow-y-auto bg-[#131313] px-3 2xl:h-[86vh]">
      <CodeEditor
        selectedquestionId={selectedQuestionId}
        isRunClicked={isRunClicked}
        setisRunClicked={setIsRunClicked}
        handleRun={handleRun}
        latestClicked={latestClicked} // Add this to ChildComponentProps
        setlatestClicked={setLatestClicked}
        // codeData and setCodeData are not used in CodeEditor in your current setup
      />
    </div>
  );
};

export default EditorWindow;