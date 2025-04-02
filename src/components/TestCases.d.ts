import React from 'react';
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
declare const TestCases: React.FC<TestCaseProps>;
export default TestCases;
