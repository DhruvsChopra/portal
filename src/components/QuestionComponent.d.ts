import React from 'react';
import { Question } from '../data/staticQuestions';
interface QuestionProps {
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
    onQuestionSelect: (id: string) => void;
}
declare const QuestionComponent: React.FC<QuestionProps>;
export default QuestionComponent;
