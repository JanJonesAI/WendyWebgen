import React, { useState } from 'react';
import { QuestionnaireData } from '../types/types';
import PreviewTemplates from './PreviewTemplates';

interface WebsitePreviewProps {
  questionnaireData: QuestionnaireData;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ questionnaireData }) => {
  const [activeTab, setActiveTab] = useState('desktop');
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const getTemplateByIndustry = () => {
    // Simple logic to suggest a template based on industry
    // In a real app, this would be more sophisticated
    switch (questionnaireData.industry.toLowerCase()) {
      case 'retail':
      case 'food & beverage':
        return 3;
      case 'technology':
      case 'education':
      case 'professional services':
        return 1;
      case 'art & design':
      case 'fitness':
        return 2;
      default:
        return 1;
    }
  };

  // Select a template based on the industry if none is selected yet
  React.useEffect(() => {
    if (selectedTemplate === 1 && questionnaireData.industry) {
      setSelectedTemplate(getTemplateByIndustry());
    }
  }, [questionnaireData.industry]);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Website Preview</h2>
          <p className="text-gray-600">Here's how your website will look based on your answers.</p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'desktop'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('desktop')}
          >
            Desktop
          </button>
          <button
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'tablet'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('tablet')}
          >
            Tablet
          </button>
          <button
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              activeTab === 'mobile'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto">
                <div className="px-4 py-1 bg-white rounded-md shadow-sm text-sm text-center">
                  {questionnaireData.businessName || 'Your Business'} - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Preview
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-300 ${
              activeTab === 'mobile'
                ? 'max-w-[375px]'
                : activeTab === 'tablet'
                  ? 'max-w-[768px]'
                  : 'w-full'
            } mx-auto overflow-auto`}
          >
            <div className="preview-container relative" style={{ minHeight: '600px' }}>
              <PreviewTemplates
                templateId={selectedTemplate}
                questionnaireData={questionnaireData}
                viewMode={activeTab}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Choose a Template</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map(templateId => (
              <div
                key={templateId}
                onClick={() => setSelectedTemplate(templateId)}
                className={`cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                  selectedTemplate === templateId
                    ? 'border-indigo-600 ring-2 ring-indigo-600'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <img
                    src={`https://images.pexels.com/photos/${1000000 + templateId * 761}/pexels-photo-${1000000 + templateId * 761}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Template ${templateId}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 bg-white">
                  <p className="text-sm font-medium text-gray-800">
                    Template {templateId}
                  </p>
                  <p className="text-xs text-gray-500">
                    {templateId === 1 ? 'Professional & Clean' : 
                     templateId === 2 ? 'Creative & Bold' : 
                     'Modern & Minimalist'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <h3 className="text-lg font-medium text-indigo-800 mb-2">Next Steps</h3>
        <p className="text-indigo-700 mb-4">
          Once you export to WIX, you'll be able to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-indigo-700">
          <li>Make further customizations to your website</li>
          <li>Add specific content and images</li>
          <li>Connect your domain</li>
          <li>Publish your website to make it live</li>
        </ul>
      </div>
    </div>
  );
};

export default WebsitePreview;