
import React, { useState, useCallback, useRef } from 'react';
import { UploadIcon, TextIcon, AlertTriangleIcon } from './icons';

interface UploadFormProps {
  onAnalyze: (file: File | null, text: string | null) => void;
  error: string | null;
}

type UploadMode = 'file' | 'text';

const UploadForm: React.FC<UploadFormProps> = ({ onAnalyze, error }) => {
  const [mode, setMode] = useState<UploadMode>('file');
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      if(fileInputRef.current) {
        fileInputRef.current.files = e.dataTransfer.files;
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'file' && file) {
      onAnalyze(file, null);
    } else if (mode === 'text' && text.trim()) {
      onAnalyze(null, text.trim());
    }
  };
  
  const isSubmitDisabled = (mode === 'file' && !file) || (mode === 'text' && !text.trim());

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-2xl shadow-indigo-900/10 p-6 sm:p-8 space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Upload Your Network Topology</h2>
        <p className="mt-2 text-gray-400">
          Provide a diagram, configuration file, or a simple description.
        </p>
      </div>

      {error && (
        <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg flex items-center gap-3">
          <AlertTriangleIcon className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex bg-gray-900/60 p-1 rounded-lg border border-gray-700">
        <button
          onClick={() => setMode('file')}
          className={`w-1/2 py-2.5 text-sm font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 ${
            mode === 'file' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          <UploadIcon className="h-5 w-5" />
          Upload File
        </button>
        <button
          onClick={() => setMode('text')}
          className={`w-1/2 py-2.5 text-sm font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 ${
            mode === 'text' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'
          }`}
        >
          <TextIcon className="h-5 w-5" />
          Paste Text
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === 'file' ? (
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200
              ${isDragging ? 'border-indigo-500 bg-indigo-900/20' : 'border-gray-600 hover:border-indigo-500'}`}
          >
            <div className="space-y-1 text-center">
              <UploadIcon className="mx-auto h-12 w-12 text-gray-500" />
              <div className="flex text-sm text-gray-400">
                <span className="relative font-medium text-indigo-400 hover:text-indigo-300">
                  <span>Upload a file</span>
                  <input ref={fileInputRef} id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                </span>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              {file && <p className="text-sm text-green-400 pt-2">{file.name}</p>}
            </div>
          </div>
        ) : (
          <textarea
            rows={8}
            className="w-full bg-gray-900/80 border border-gray-600 rounded-lg p-4 text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            placeholder="Describe your network... e.g., 'Two Cisco 2960 switches connected via port Fa0/24 on both sides. A router connects to SW1 on port Gi0/1.'"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        )}
        
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
        >
          Analyze Topology
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
