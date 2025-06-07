import React from 'react';
import { PenLine, Paintbrush, Users, Mail, Megaphone, Image, CheckCircle, Upload } from 'lucide-react';
import { QuestionnaireData, industryOptions, designStyleOptions, featureOptions } from '../types/types';

interface QuestionnaireFormProps {
  step: number;
  questionnaireData: QuestionnaireData;
  updateQuestionnaireData: (field: keyof QuestionnaireData, value: any) => void;
  extractedColors: string[];
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({
  step,
  questionnaireData,
  updateQuestionnaireData,
  extractedColors
}) => {
  const handleContactInfoChange = (field: keyof QuestionnaireData['contactInfo'], value: string) => {
    updateQuestionnaireData('contactInfo', {
      ...questionnaireData.contactInfo,
      [field]: value
    });
  };

  const handleSocialMediaChange = (field: keyof QuestionnaireData['socialMedia'], value: string) => {
    updateQuestionnaireData('socialMedia', {
      ...questionnaireData.socialMedia,
      [field]: value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    const updatedFeatures = questionnaireData.features.includes(feature)
      ? questionnaireData.features.filter(f => f !== feature)
      : [...questionnaireData.features, feature];
    
    updateQuestionnaireData('features', updatedFeatures);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateQuestionnaireData('logo', e.target.files[0]);
    }
  };

  const renderStepIcon = () => {
    switch (step) {
      case 1: return <PenLine className="h-8 w-8 text-indigo-600" />;
      case 2: return <Users className="h-8 w-8 text-indigo-600" />;
      case 3: return <Image className="h-8 w-8 text-indigo-600" />;
      case 4: return <Paintbrush className="h-8 w-8 text-indigo-600" />;
      case 5: return <Megaphone className="h-8 w-8 text-indigo-600" />;
      case 6: return <CheckCircle className="h-8 w-8 text-indigo-600" />;
      case 7: return <Mail className="h-8 w-8 text-indigo-600" />;
      case 8: return <CheckCircle className="h-8 w-8 text-indigo-600" />;
      default: return null;
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Business Basics</h2>
            </div>
            <p className="text-gray-600">Let's start with the fundamentals about your business.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  What's your business name?
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={questionnaireData.businessName}
                  onChange={(e) => updateQuestionnaireData('businessName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Acme Enterprises"
                />
              </div>
              
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  What type of business do you run?
                </label>
                <input
                  type="text"
                  id="businessType"
                  value={questionnaireData.businessType}
                  onChange={(e) => updateQuestionnaireData('businessType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Consulting Agency, Restaurant, Online Shop"
                />
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Select your industry
                </label>
                <select
                  id="industry"
                  value={questionnaireData.industry}
                  onChange={(e) => updateQuestionnaireData('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an industry</option>
                  {industryOptions.map(industry => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Target Audience</h2>
            </div>
            <p className="text-gray-600">Tell us about your ideal customers or clients.</p>
            
            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-1">
                Describe your target audience
              </label>
              <textarea
                id="targetAudience"
                value={questionnaireData.targetAudience}
                onChange={(e) => updateQuestionnaireData('targetAudience', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Professionals aged 25-40 interested in personal development, small business owners in the tech industry"
              />
              <p className="mt-1 text-sm text-gray-500">
                Consider demographics (age, location), interests, pain points, and what they value.
              </p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Branding & Logo</h2>
            </div>
            <p className="text-gray-600">Upload your logo to establish your brand identity.</p>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <Upload className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-600">Drag and drop your logo here, or click to browse</p>
                  <input
                    type="file"
                    id="logo"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => document.getElementById('logo')?.click()}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Upload Logo
                  </button>
                  {questionnaireData.logo && (
                    <p className="text-green-600 font-medium">
                      {questionnaireData.logo.name} uploaded successfully
                    </p>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Uploading your logo will help us extract your brand colors automatically.
                If you don't have a logo yet, you'll be able to select colors in the next step.
              </p>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Design Preferences</h2>
            </div>
            <p className="text-gray-600">Let's define the look and feel of your website.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select your preferred design style
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {designStyleOptions.map(style => (
                    <div
                      key={style}
                      onClick={() => updateQuestionnaireData('designStyle', style.toLowerCase())}
                      className={`cursor-pointer rounded-lg border p-4 text-center transition-all ${
                        questionnaireData.designStyle === style.toLowerCase()
                          ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                      }`}
                    >
                      <p className="font-medium">{style}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Color Preferences
                </label>
                {extractedColors.length > 0 ? (
                  <div>
                    <p className="mb-2 text-sm text-gray-600">Colors extracted from your logo:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {extractedColors.map((color, index) => (
                        <div 
                          key={index}
                          className="w-10 h-10 rounded-md shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">These colors will be used as the basis for your website's color scheme.</p>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="colorPreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe your color preferences if no logo was uploaded
                    </label>
                    <textarea
                      id="colorPreference"
                      value={questionnaireData.colorPreference}
                      onChange={(e) => updateQuestionnaireData('colorPreference', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g., Blues and whites for a clean, professional look. Our brand color is #4A90E2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Mission & Vision</h2>
            </div>
            <p className="text-gray-600">Share your company's purpose and goals.</p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="missionStatement" className="block text-sm font-medium text-gray-700 mb-1">
                  Mission Statement (What you do now)
                </label>
                <textarea
                  id="missionStatement"
                  value={questionnaireData.missionStatement}
                  onChange={(e) => updateQuestionnaireData('missionStatement', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Our mission is to provide affordable, sustainable products that improve everyday life."
                />
                <p className="mt-1 text-sm text-gray-500">
                  What is your organization's purpose? What problem do you solve?
                </p>
              </div>
              
              <div>
                <label htmlFor="visionStatement" className="block text-sm font-medium text-gray-700 mb-1">
                  Vision Statement (What you aspire to achieve)
                </label>
                <textarea
                  id="visionStatement"
                  value={questionnaireData.visionStatement}
                  onChange={(e) => updateQuestionnaireData('visionStatement', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., We envision a world where sustainable products are the norm, not the exception."
                />
                <p className="mt-1 text-sm text-gray-500">
                  What is your long-term vision? What impact do you want to make?
                </p>
              </div>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Website Features</h2>
            </div>
            <p className="text-gray-600">Select the features you want on your website.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureOptions.map(feature => (
                <div 
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`flex items-center p-4 border rounded-md cursor-pointer transition-all ${
                    questionnaireData.features.includes(feature)
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-5 h-5 mr-3 flex-shrink-0 rounded-full ${
                    questionnaireData.features.includes(feature)
                      ? 'bg-indigo-600'
                      : 'border-2 border-gray-400'
                  }`}>
                    {questionnaireData.features.includes(feature) && (
                      <CheckCircle className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            </div>
            <p className="text-gray-600">Provide contact details to display on your website.</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={questionnaireData.contactInfo.email}
                  onChange={(e) => handleContactInfoChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="contact@yourbusiness.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={questionnaireData.contactInfo.phone}
                  onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Address
                </label>
                <textarea
                  id="address"
                  value={questionnaireData.contactInfo.address}
                  onChange={(e) => handleContactInfoChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Social Media Links</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                      Facebook
                    </label>
                    <input
                      type="url"
                      id="facebook"
                      value={questionnaireData.socialMedia.facebook}
                      onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://facebook.com/yourbusiness"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                      Instagram
                    </label>
                    <input
                      type="url"
                      id="instagram"
                      value={questionnaireData.socialMedia.instagram}
                      onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://instagram.com/yourbusiness"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                      Twitter
                    </label>
                    <input
                      type="url"
                      id="twitter"
                      value={questionnaireData.socialMedia.twitter}
                      onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://twitter.com/yourbusiness"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      value={questionnaireData.socialMedia.linkedin}
                      onChange={(e) => handleSocialMediaChange('linkedin', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://linkedin.com/company/yourbusiness"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 8:
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center space-x-3">
              {renderStepIcon()}
              <h2 className="text-2xl font-bold text-gray-800">Final Review</h2>
            </div>
            <p className="text-gray-600">Review your information before generating your website.</p>
            
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Business Information</h3>
                <p><span className="font-medium">Business Name:</span> {questionnaireData.businessName || 'Not provided'}</p>
                <p><span className="font-medium">Business Type:</span> {questionnaireData.businessType || 'Not provided'}</p>
                <p><span className="font-medium">Industry:</span> {questionnaireData.industry || 'Not provided'}</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Target Audience</h3>
                <p>{questionnaireData.targetAudience || 'Not provided'}</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Branding</h3>
                <p><span className="font-medium">Logo:</span> {questionnaireData.logo ? 'Uploaded' : 'Not uploaded'}</p>
                <p><span className="font-medium">Design Style:</span> {questionnaireData.designStyle}</p>
                {extractedColors.length > 0 ? (
                  <div>
                    <p className="font-medium mb-1">Extracted Colors:</p>
                    <div className="flex flex-wrap gap-2">
                      {extractedColors.map((color, index) => (
                        <div 
                          key={index} 
                          className="w-8 h-8 rounded-md shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p><span className="font-medium">Color Preference:</span> {questionnaireData.colorPreference || 'Not provided'}</p>
                )}
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Mission & Vision</h3>
                <p><span className="font-medium">Mission:</span> {questionnaireData.missionStatement || 'Not provided'}</p>
                <p><span className="font-medium">Vision:</span> {questionnaireData.visionStatement || 'Not provided'}</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                <h3 className="font-medium text-indigo-800 mb-2">Selected Features</h3>
                {questionnaireData.features.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {questionnaireData.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No features selected</p>
                )}
              </div>
              
              <p className="text-sm text-gray-500">
                Click "Generate Website" to create your website based on this information.
                You'll be able to make adjustments after the initial generation.
              </p>
            </div>
          </div>
        );
      
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className={step > 0 ? 'animate-fadeIn' : ''}>
      {renderStepContent()}
    </div>
  );
};

export default QuestionnaireForm;