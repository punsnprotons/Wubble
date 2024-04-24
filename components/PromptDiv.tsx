"use client"
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Assuming you're using react-icons for icons

interface PromptDivProps {
  inputOneTitle: string;
  inputOneSubtitle: string;
  inputTwoTitle: string;
  inputTwoSubtitle: string;
}

const PromptDiv: React.FC<PromptDivProps> = ({ inputOneTitle, inputOneSubtitle, inputTwoTitle, inputTwoSubtitle }) => {
  const [uploading, setUploading] = useState(false);
  const [mediaPreviews, setMediaPreviews] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('Choose files'); // State to hold the file name or default text

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const filesArray = Array.from(event.target.files);
      const fileNames = filesArray.map(file => file.name).join(', ');
      setFileName(fileNames); // Set the file names to display

      setUploading(true); // Simulate upload
      setTimeout(() => { // Simulate a delay for uploading
        setUploading(false);
        // Update state with all selected files
        setMediaPreviews(mediaPreviews.concat(filesArray.map(file => URL.createObjectURL(file))));
      }, 2000); // Simulate upload time
    }
  };

  const removeImage = (index: number) => {
    setMediaPreviews(mediaPreviews.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-neutral-800 p-4 rounded-lg" style={{ width: 'calc(33.3333% - 0.666rem)', height: 'auto' }}>
      <h2 className="text-white text-xl mb-2">{inputOneTitle}</h2>
      <textarea className="w-full h-36 p-2 bg-neutral-700 text-white rounded" placeholder={inputOneSubtitle}></textarea>
      <h2 className="text-white text-xl mb-2 mt-4">{inputTwoTitle}</h2>
      <p className="text-gray-400 opacity-75 mb-2">{inputTwoSubtitle}</p>
      {uploading && <div className="w-full bg-powder-blue-200 h-2 mt-2"></div>}
      <div className="flex flex-wrap gap-2 mt-2">
        {mediaPreviews.map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt="Preview" className="max-h-20 max-w-full" />
            <button onClick={() => removeImage(index)} className="absolute top-0 right-0 bg-gray-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center">x</button>
          </div>
        ))}
      </div>
      <div className="mt-4 relative">
        <label className="w-full flex justify-center items-center pl-10 pr-3 py-2 rounded bg-neutral-700 text-white block cursor-pointer">
          <FaUpload className="mr-2" />{fileName}
          <input type="file" accept="image/*,video/*" onChange={handleFileChange} multiple className="hidden" />
        </label>
      </div>
     
      {/* Create button */}
      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 30 30" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l2 2m-2-2v6m4-6l2 2m0 0l2-2m-2 2v6m4-6l2 2m0 0l2-2m-2 2v6" />
          </svg>
          Create
      </button>
    </div>
  );
};

export default PromptDiv;