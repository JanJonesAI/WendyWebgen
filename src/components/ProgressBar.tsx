import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-indigo-600">
          Step {currentStep} of {totalSteps}
        </p>
        <p className="text-sm font-medium text-indigo-600">
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </p>
      </div>
      
      <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      <div className="hidden md:flex justify-between mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  isCompleted
                    ? 'bg-indigo-600 text-white'
                    : isCurrent
                      ? 'bg-white border-2 border-indigo-600 text-indigo-600'
                      : 'bg-white border border-gray-300 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="text-xs">{stepNumber}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;