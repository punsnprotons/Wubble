import React from 'react';

const GenerationDiv = () => {
  return (
    <div className="bg-neutral-800 p-4 rounded-lg" style={{ width: 'calc(33.3333% - 0.666rem)', height: '550px' }}> {/* Adjusted line */}
    <h2 className="text-white text-xl mb-2">Song List</h2>
    <textarea className="w-full h-36 p-2 bg-neutral-700 text-white rounded" placeholder="Describe your brand"></textarea>
</div>
  );
};

export default GenerationDiv;