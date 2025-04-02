import React from 'react';
import gCheck from '../assets/gCheck.png'; // Adjust path
import rCross from '../assets/rCross.png';

interface TestCompProps {
  isPassed: boolean;
  num: number;
  isClicked: boolean;
}

const TestComp: React.FC<TestCompProps> = ({ isPassed, num, isClicked }) => {
  return (
    <div
      className={`mx-3 my-2 flex h-14 cursor-pointer items-center justify-evenly rounded-lg border-2 bg-black px-4 py-3 text-center ${isClicked && isPassed ? 'border-green2' : isClicked && !isPassed ? 'border-accent' : 'border-dark'}`}
    >
      <img src={isPassed ? gCheck : rCross} alt={isPassed ? 'green check' : 'red cross'} className="w-4.5 h-4.5" />
      <p className="mx-1 text-base">Test Case {num + 1}</p>
    </div>
  );
};

export default TestComp;