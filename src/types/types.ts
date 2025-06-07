export interface QuestionnaireData {
  businessName: string;
  businessType: string;
  industry: string;
  targetAudience: string;
  missionStatement: string;
  visionStatement: string;
  colorPreference: string;
  extractedColors: string[];
  logo: File | null;
  designStyle: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  features: string[];
}

export const initialQuestionnaireData: QuestionnaireData = {
  businessName: '',
  businessType: '',
  industry: '',
  targetAudience: '',
  missionStatement: '',
  visionStatement: '',
  colorPreference: '',
  extractedColors: [],
  logo: null,
  designStyle: 'modern',
  contactInfo: {
    email: '',
    phone: '',
    address: ''
  },
  socialMedia: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  },
  features: []
};

export interface PageSection {
  id: string;
  type: 'hero' | 'about' | 'services' | 'testimonials' | 'contact' | 'gallery';
  title: string;
  content?: string;
  imageUrl?: string;
}

export const industryOptions = [
  'Retail',
  'Healthcare',
  'Education',
  'Finance',
  'Technology',
  'Food & Beverage',
  'Real Estate',
  'Travel',
  'Fitness',
  'Art & Design',
  'Professional Services',
  'Other'
];

export const designStyleOptions = [
  'Modern',
  'Minimalist',
  'Bold',
  'Elegant',
  'Playful',
  'Corporate',
  'Vintage',
  'Natural'
];

export const featureOptions = [
  'Blog',
  'Online Store',
  'Booking System',
  'Contact Form',
  'Portfolio Gallery',
  'Newsletter Signup',
  'Testimonials',
  'FAQ Section',
  'Social Media Integration',
  'Video Content'
];