import React, { useState } from 'react';
import QuesNavbar from './components/QuesNavbar';
import QuestionComponent from './components/QuestionComponent';
import EditorWindow from './components/EditorWindow';
import { staticQuestions } from './data/staticQuestions';

const App: React.FC = () => {
  const [, setTimeOver] = useState<boolean>(false);
  const [questions] = useState(staticQuestions);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(questions[0]?.ID || '');

  const handleSelectedQuestionId = (id: string) => {
    setSelectedQuestionId(id);
  };

  return (
    <main className="overflow-y-hidden">
      <QuesNavbar setTimeOver={setTimeOver} />
      <div className="flex bg-dark2">
        <QuestionComponent
          questions={questions}
          setQuestions={() => {}} // No-op since static
          onQuestionSelect={handleSelectedQuestionId}
        />
        <EditorWindow selectedQuestionId={selectedQuestionId} />
      </div>
    </main>
  );
};

export default App;