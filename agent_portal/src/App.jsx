import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white">
      <div className="text-center px-6 py-12 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Tailwind + React + Vite!</h1>
        <p className="text-lg md:text-xl text-white/80">
          You're now running a modern React project styled with Tailwind CSS.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-indigo-700 rounded-full font-semibold shadow hover:bg-indigo-100 transition-all duration-300">
          Let’s Build Something
        </button>
      </div>
    </div>
  );
};

export default App;
