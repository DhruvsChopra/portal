import React from 'react';
interface RunCodeParams {
    source_code: string;
    language_id: number;
    question_id: string;
}
interface ChildComponentProps {
    handleRun: (params: RunCodeParams) => void;
    isRunClicked: boolean;
    setisRunClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setlatestClicked: React.Dispatch<React.SetStateAction<string | null>>;
    selectedquestionId: string;
    latestClicked: string | null;
}
declare const CodeEditor: React.FC<ChildComponentProps>;
export default CodeEditor;
