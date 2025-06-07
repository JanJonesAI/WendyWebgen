import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Upload, PenLine, Layout, Paintbrush, Users, Mail, Megaphone, CheckCircle, Image } from 'lucide-react';
import QuestionnaireForm from './components/QuestionnaireForm';
import WebsitePreview from './components/WebsitePreview';
import ColorExtractor from './components/ColorExtractor';
import ProgressBar from './components/ProgressBar';
import { QuestionnaireData, initialQuestionnaireData } from './types/types';

function App() {
  const [step, setStep] = useState(1);
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData>(initialQuestionnaireData);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  
  const totalSteps = 8;
  
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      setPreviewMode(true);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else if (previewMode) {
      setPreviewMode(false);
      setStep(totalSteps);
    }
  };
  
  const updateQuestionnaireData = (field: keyof QuestionnaireData, value: any) => {
    setQuestionnaireData({
      ...questionnaireData,
      [field]: value
    });
  };
  
  const handleColorExtraction = (colors: string[]) => {
    setExtractedColors(colors);
    updateQuestionnaireData('extractedColors', colors);
  };
  
  const handleExport = () => {
    // This would contain logic to export to WIX
    alert('This would export your website to WIX platform.');
    console.log('Exporting website with data:', questionnaireData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Layout className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-800">WIX Website Generator</h1>
          </div>
          
          {!previewMode && (
            <div className="hidden md:flex items-center">
              <ProgressBar currentStep={step} totalSteps={totalSteps} />
            </div>
          )}
          
          {previewMode && (
            <button
              onClick={handleExport}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Export to WIX
            </button>
          )}
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {previewMode ? (
          <WebsitePreview questionnaireData={questionnaireData} />
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="md:hidden mb-6">
              <ProgressBar currentStep={step} totalSteps={totalSteps} />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <QuestionnaireForm
                step={step}
                questionnaireData={questionnaireData}
                updateQuestionnaireData={updateQuestionnaireData}
                extractedColors={extractedColors}
              />
              
              {step === 3 && (
                <div className="mt-6">
                  <ColorExtractor onColorsExtracted={handleColorExtraction} />
                </div>
              )}
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  disabled={step === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
                
                <button
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  {step < totalSteps ? 'Next' : 'Generate Website'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;