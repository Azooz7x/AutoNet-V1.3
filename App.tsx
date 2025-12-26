import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ResultsDisplay from './components/ResultsDisplay';
import { AnalysisResult } from './types';
import { analyzeTopology } from './services/geminiService';
import { AutoNetLogo } from './components/icons';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [view, setView] = useState<'form' | 'results'>('form');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async (file: File | null, text: string | null) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysisResult = await analyzeTopology(file, text);
      setResult(analysisResult);
      setView('results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setView('form'); // Stay on form view to show error
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setView('form');
    setResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col antialiased">
      <header className="py-4 px-4 sm:px-8 border-b border-gray-700/50 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AutoNetLogo className="h-8 w-8" />
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              AutoNet
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4">
               <LoadingSpinner />
               <p className="text-lg text-gray-400">AutoNet is analyzing your topology...</p>
               <p className="text-sm text-gray-500">This may take a moment.</p>
            </div>
          )}
          {!isLoading && view === 'form' && (
            <UploadForm onAnalyze={handleAnalysis} error={error} />
          )}
          {!isLoading && view === 'results' && result && (
            <ResultsDisplay result={result} onReset={handleReset} />
          )}
        </div>
      </main>

      <footer className="text-center p-4 text-gray-500 text-sm">
        AutoNet: Built for modern network automation.
      </footer>
    </div>
  );
};

export default App;