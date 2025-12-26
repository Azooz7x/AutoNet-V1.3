
import React, { useState } from 'react';
import { AnalysisResult, DeviceConfig, ValidationFinding } from '../types';
import { DownloadIcon, ChevronDownIcon, ClipboardIcon, CheckIcon, AlertTriangleIcon, ShieldCheckIcon, InfoIcon } from './icons';

interface ResultsDisplayProps {
  result: AnalysisResult;
  onReset: () => void;
}

const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const ValidationReport: React.FC<{ findings: ValidationFinding[] }> = ({ findings }) => {
  if (findings.length === 0) {
    return (
      <div className="flex items-center gap-2 p-3 bg-green-900/20 border border-green-700/30 rounded-lg text-green-400 text-sm">
        <ShieldCheckIcon className="h-5 w-5" />
        <span>No validation issues found. Config adheres to best practices.</span>
      </div>
    );
  }

  return (
    <div className="space-y-2 mt-2">
      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Validation Audit Findings</h5>
      {findings.map((f, i) => (
        <div 
          key={i} 
          className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
            f.severity === 'error' ? 'bg-red-900/20 border-red-800 text-red-300' :
            f.severity === 'warning' ? 'bg-yellow-900/20 border-yellow-800 text-yellow-300' :
            'bg-blue-900/20 border-blue-800 text-blue-300'
          }`}
        >
          {f.severity === 'error' ? <AlertTriangleIcon className="h-5 w-5 flex-shrink-0" /> :
           f.severity === 'warning' ? <AlertTriangleIcon className="h-5 w-5 flex-shrink-0" /> :
           <InfoIcon className="h-5 w-5 flex-shrink-0" />}
          <span>{f.message}</span>
        </div>
      ))}
    </div>
  );
};

const CodeBlock: React.FC<{ content: string; language: string; filename: string; isDownloadDisabled: boolean; isObscured: boolean; }> = ({ content, language, filename, isDownloadDisabled, isObscured }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (isObscured) return;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="bg-gray-900/80 rounded-lg border border-gray-700 my-4">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800/60 rounded-t-lg">
        <span className="text-xs font-mono text-gray-400">{language}</span>
        <div className="flex items-center gap-2">
            <button onClick={handleCopy} disabled={isObscured} className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed">
              {copied ? <CheckIcon className="h-4 w-4 text-green-400" /> : <ClipboardIcon className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
             <button 
                onClick={() => downloadFile(content, filename, 'text/plain')} 
                disabled={isDownloadDisabled}
                title={isDownloadDisabled ? "Please acknowledge the disclaimer above" : `Download ${filename}`}
                className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-400"
              >
              <DownloadIcon className="h-4 w-4" /> Download
            </button>
        </div>
      </div>
      <pre className={`p-4 overflow-x-auto text-sm text-gray-300 font-mono transition-all duration-300 ${isObscured ? 'blur-md select-none pointer-events-none' : ''}`}>
        <code>{content}</code>
      </pre>
    </div>
  );
};

const AccordionItem: React.FC<{ title: string; badge?: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, badge, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-800 hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {badge}
        </div>
        <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800/40">
          {children}
        </div>
      )}
    </div>
  );
};

const AcknowledgePrompt: React.FC = () => (
  <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-dashed border-gray-600">
    <p className="text-gray-400 italic">Please check "I understand" in the disclaimer box above to view this content.</p>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onReset }) => {
  const [isAcknowledged, setIsAcknowledged] = useState(() => sessionStorage.getItem('disclaimerAcknowledged') === 'true');
  const [zoom, setZoom] = useState(1);
  const hasSketch = result.topologySketch && result.topologySketch.trim().startsWith('<svg');

  const handleAcknowledgementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsAcknowledged(checked);
    if (checked) {
        sessionStorage.setItem('disclaimerAcknowledged', 'true');
    } else {
        sessionStorage.removeItem('disclaimerAcknowledged');
    }
  };

  const totalErrors = result.deviceConfigs.reduce((acc, dc) => acc + dc.validationFindings.filter(f => f.severity === 'error').length, 0);

  return (
    <div className="space-y-8 animate-fade-in w-full">
      <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Analysis Complete</h2>
          <p className="mt-2 text-lg text-gray-400">Here are your assets, validated configurations, and expert assessment.</p>
      </div>

      <div className="bg-yellow-900/30 border border-yellow-700/50 text-yellow-200 px-4 py-3 rounded-lg flex flex-col gap-3">
        <div className="flex items-center gap-3">
            <AlertTriangleIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
            <h3 className="text-lg font-bold text-yellow-300">Important: Configuration Review Required</h3>
        </div>
        <p className="text-sm text-yellow-200/90 ml-9">You must thoroughly review, test, and validate all configurations before deployment to production environments. AI-generated validation checks are for guidance only.</p>
        <div className="ml-9 mt-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input 
                    type="checkbox" 
                    checked={isAcknowledged} 
                    onChange={handleAcknowledgementChange}
                    className="h-4 w-4 rounded bg-gray-800 border-gray-600 text-indigo-500 focus:ring-indigo-600"
                />
                I understand
            </label>
        </div>
      </div>
      
      <div className="space-y-4">
        {hasSketch && (
           <AccordionItem title="Visual Topology Sketch" defaultOpen={true}>
             <div className="relative">
                <div className={`bg-gray-900 rounded-lg p-4 border border-gray-700 flex justify-center items-center overflow-auto transition-all duration-300 ${!isAcknowledged ? 'blur-md pointer-events-none' : ''}`}>
                    <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
                         dangerouslySetInnerHTML={{ __html: result.topologySketch! }} 
                    />
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-gray-900/80 border border-gray-700 rounded-lg p-1">
                    <button onClick={() => setZoom(z => Math.max(z - 0.2, 0.4))} className="px-2 py-1 text-lg font-bold text-gray-300 hover:bg-gray-700 rounded-md transition-colors">-</button>
                    <span className="text-xs text-gray-400 w-10 text-center">{(zoom * 100).toFixed(0)}%</span>
                    <button onClick={() => setZoom(z => Math.min(z + 0.2, 3))} className="px-2 py-1 text-lg font-bold text-gray-300 hover:bg-gray-700 rounded-md transition-colors">+</button>
                </div>
             </div>
             <div className="flex justify-end mt-2">
                 <button 
                  onClick={() => downloadFile(result.topologySketch!, 'topology.svg', 'image/svg+xml')}
                  disabled={!isAcknowledged}
                  className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1.5 p-2 rounded-md hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   <DownloadIcon className="h-4 w-4" /> Download SVG
                 </button>
             </div>
           </AccordionItem>
        )}

        <AccordionItem 
            title="Device Configurations" 
            badge={totalErrors > 0 && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{totalErrors} ERRORS</span>}
            defaultOpen={!hasSketch}
        >
          {result.deviceConfigs.length > 0 ? (
             result.deviceConfigs.map((dc, index) => (
              <div key={index} className="mb-8 last:mb-0 pb-8 border-b border-gray-700/50 last:border-0">
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-indigo-400 text-lg">{dc.deviceName}</h4>
                    {dc.validationFindings.length > 0 && (
                        <span className="text-xs font-medium text-gray-500 bg-gray-900 px-2 py-0.5 rounded border border-gray-700">
                            {dc.validationFindings.length} Audit Findings
                        </span>
                    )}
                </div>
                {isAcknowledged && <ValidationReport findings={dc.validationFindings} />}
                <CodeBlock 
                    content={dc.config} 
                    language="cisco_ios" 
                    filename={`${dc.deviceName.replace(/\s+/g, '_')}_config.txt`} 
                    isDownloadDisabled={!isAcknowledged} 
                    isObscured={!isAcknowledged} 
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No device configurations were generated.</p>
          )}
        </AccordionItem>

        <AccordionItem title="Ansible Playbook">
           <CodeBlock content={result.ansiblePlaybook} language="yaml" filename="playbook.yml" isDownloadDisabled={!isAcknowledged} isObscured={!isAcknowledged}/>
        </AccordionItem>
        
        <AccordionItem title="Network Assessment">
          {isAcknowledged ? (
            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-indigo-400 whitespace-pre-wrap max-w-none">
              <p>{result.assessment}</p>
            </div>
          ) : <AcknowledgePrompt />}
        </AccordionItem>

        <AccordionItem title="Recommendations">
          {isAcknowledged ? (
             <ul className="space-y-3 list-disc list-inside text-gray-300">
              {result.recommendations.map((rec, index) => (
                <li key={index}><span className="font-semibold text-indigo-400">Recommendation {index + 1}:</span> {rec}</li>
              ))}
            </ul>
           ) : <AcknowledgePrompt />}
        </AccordionItem>
      </div>

      <div className="pt-6 text-center">
        <button
          onClick={onReset}
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/20"
        >
          Submit Another Topology
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
