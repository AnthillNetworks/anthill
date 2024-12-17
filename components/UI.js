import React from "react";

const TransformUI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl font-semibold text-white drop-shadow-lg shadow-[#010383]"
        style={{ textShadow: '0 0 10px #010383' }}
        >
          Transform <br /> Ideas into
        </h1>
        <h2 className="text-6xl lg:text-8xl font-bold text-blue-800 drop-shadow-lg mt-2"
        style={{ textShadow: '0 0 5px #010383' }}
        >
          Impactful <br /> MVPs
        </h2>
      </div>
    </div>
  );
};

export default TransformUI;
