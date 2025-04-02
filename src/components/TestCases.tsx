import React, { useState, useEffect } from 'react';
import TestComp from './TestComp';

interface TestCaseResult {
  status: {
    description: string;
  };
  compile_output?: string;
  stderr?: string;
  input?: string;
  stdout?: string;
  expected_output?: string;
}

interface CodeData {
  no_testcases_passed: number;
  result: TestCaseResult[];
}

interface TestCaseProps {
  codeData: CodeData;
}

const TestCases: React.FC<TestCaseProps> = ({ codeData }) => {
  const [allPassed, setAllPassed] = useState(false);
  const [currentTestCase, setCurrentTestCase] = useState(0);

  const handleTestClick = (testKaKey: number) => {
    setCurrentTestCase(testKaKey);
  };

  useEffect(() => {
    if (codeData) {
      setAllPassed(codeData.no_testcases_passed === codeData.result.length);
    }
  }, [codeData]);

  return codeData ? (
    <div className="flex justify-center">
      <div className="grid h-[60vh] w-full grid-rows-[2fr_5fr_2fr]">
        <div className="flex justify-center">
          <div className="m-3 flex w-full items-center justify-between rounded-lg bg-lightGray px-4 py-3">
            <div>
              <p className={`${allPassed ? 'text-green2' : 'text-accent'} text-2xl font-medium`}>
                {codeData.no_testcases_passed}/{codeData.result.length} Test Cases Have Passed {allPassed ? ' :-)' : " :'-( "}
              </p>
              <p className="mt-1 text-sm text-white">{allPassed ? 'Great Work!!' : 'Try Again!!!'}</p>
            </div>
          </div>
        </div>
        <div className="mx-3 flex justify-center bg-[#161616] py-1 text-white">
          <div className="flex h-40 w-[40%] flex-col">
            {codeData.result.map((item: TestCaseResult, index: number) => (
              <div key={index} onClick={() => handleTestClick(index)}>
                <TestComp
                  isClicked={currentTestCase === index}
                  isPassed={item.status.description === 'Accepted'}
                  num={index}
                />
              </div>
            ))}
          </div>
          {/* Details Section */}
        </div>
      </div>
    </div>
  ) : null;
};

export default TestCases;
