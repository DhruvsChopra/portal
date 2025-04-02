import React from 'react';
interface TaskResult {
    testcases: {
        testcase_id: string;
        status: string;
        description: string;
    }[];
    testcases_passed: number;
    testcases_failed: number;
}
interface SubmitCodeWindowProps {
    taskres: TaskResult;
}
declare const SubmitCodeWindow: React.FC<SubmitCodeWindowProps>;
export default SubmitCodeWindow;
