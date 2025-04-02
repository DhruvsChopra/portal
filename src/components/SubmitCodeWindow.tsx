import React from 'react';

interface TaskResult {
  testcases: { testcase_id: string; status: string; description: string }[];
  testcases_passed: number;
  testcases_failed: number;
}

interface SubmitCodeWindowProps {
  taskres: TaskResult;
}

const SubmitCodeWindow: React.FC<SubmitCodeWindowProps> = ({ taskres }) => {
  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-md text-white">
      <h2 className="mb-3 text-left text-3xl font-medium text-accent font-[s-sling]">Submission Result</h2>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/3 border-b-2 border-white bg-[#1F1F1F] p-4 text-left font-semibold">Test Case</th>
            <th className="w-1/3 border-b-2 border-white bg-[#1F1F1F] p-4 text-left font-semibold">Status</th>
            <th className="w-1/3 border-b-2 border-white bg-[#1F1F1F] p-4 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {taskres.testcases.map((testcase, index) => (
            <tr key={testcase.testcase_id}>
              <td className={`border-y-2 border-black bg-[#1F1F1F] p-4 ${testcase.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {index + 1}
              </td>
              <td className={`border-y-2 border-black bg-[#1F1F1F] p-4 ${testcase.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {testcase.status.charAt(0).toUpperCase() + testcase.status.slice(1)}
              </td>
              <td className={`border-y-2 border-black bg-[#1F1F1F] p-4 ${testcase.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {testcase.description.charAt(0).toUpperCase() + testcase.description.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10">
        <h3 className="mb-2 text-3xl font-medium text-accent font-[s-sling]">Baking Summary</h3>
        <div className="mb-3 grid w-1/2 divide-y-2 divide-black bg-[#1F1F1F] tracking-wider">
          <p className="flex border-b-1 border-black p-4 text-left font-normal text-green-500">Testcases Passed: {taskres.testcases_passed}</p>
          <p className="flex p-4 text-left font-normal text-red-500">Testcases Failed: {taskres.testcases_failed}</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitCodeWindow;