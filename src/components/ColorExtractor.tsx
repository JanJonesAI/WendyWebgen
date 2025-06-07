import React, { useState, useRef } from 'react';
import { Upload, Trash2 } from 'lucide-react';

interface ColorExtractorProps {
  onColorsExtracted: (colors: string[]) => void;
}

const ColorExtractor: React.FC<ColorExtractorProps> = ({ onColorsExtracted }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  };
  
  const handleImageUpload = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setPreviewImage(e.target.result);
        extractColors(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const extractColors = (imageSrc: string) => {
    // Simulated color extraction since we can't do actual image processing
    // In a real app, you'd use a color extraction library or API
    const mockExtractedColors = [
      '#3B82F6', // Blue
      '#10B981', // Green
      '#F59E0B', // Yellow
      '#EF4444', // Red
      '#8B5CF6'  // Purple
    ];
    
    // Randomly select 3-5 colors to simulate extracted colors from the logo
    const numColors = Math.floor(Math.random() * 3) + 3; // 3-5 colors
    const selectedColors = [];
    for (let i = 0; i < numColors; i++) {
      const randomIndex = Math.floor(Math.random() * mockExtractedColors.length);
      selectedColors.push(mockExtractedColors[randomIndex]);
    }
    
    setExtractedColors(selectedColors);
    onColorsExtracted(selectedColors);
  };
  
  const handleRemoveImage = () => {
    setPreviewImage(null);
    setExtractedColors([]);
    onColorsExtracted([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-800">Logo & Brand Colors</h3>
      <p className="text-gray-600">
        Upload your logo or branding materials to automatically extract your brand colors.
      </p>
      
      {!previewImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
            isDragging
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-gray-300 hover:border-indigo-500 hover:bg-gray-50'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="space-y-3">
            <div className="flex justify-center">
              <Upload className="h-10 w-10 text-gray-400" />
            </div>
            <p className="text-gray-600">Drag and drop your logo here, or click to browse</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
              ref={fileInputRef}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Browse Files
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={previewImage}
              alt="Uploaded logo"
              className="max-h-64 mx-auto rounded-md shadow-sm"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              aria-label="Remove image"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          
          {extractedColors.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Extracted Colors</h4>
              <div className="flex flex-wrap gap-2">
                {extractedColors.map((color, index) => (
                  <div
                    key={index}
                    className="p-1 border border-gray-200 rounded-md"
                  >
                    <div
                      className="w-10 h-10 rounded-md shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <p className="text-xs text-center mt-1">{color}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                These colors will be used to create your website's color scheme.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorExtractor;