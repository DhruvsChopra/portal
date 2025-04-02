import React from 'react';


interface QuesNavbarProps {
  setTimeOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuesNavbar: React.FC<QuesNavbarProps> = ({ setTimeOver }) => {
  const handleEndTest = () => {
    localStorage.clear();
    setTimeOver(true); // Simulate test end
  };

  return (
    <div className="flex h-[17vh] w-screen flex-row items-center justify-between border-b-2 border-cream bg-black px-10 2xl:h-[14vh]">
      <div>{/* Timer placeholder if needed */}</div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-fit flex-col">
          <div>
            <span className="mr-8 text-7xl text-amber-50  ">Code here</span>
          </div>
          <div className="flex items-center gap-52">
            
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleEndTest}
          className="whitespace-nowrap rounded-md bg-dark2 p-2 px-10 text-lg text-white hover:bg-accent hover:text-gray-600 font-[s-sling]"
        >
          End Test
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default QuesNavbar;