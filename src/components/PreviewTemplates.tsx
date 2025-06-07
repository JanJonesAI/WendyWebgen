import React from 'react';
import { QuestionnaireData } from '../types/types';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface PreviewTemplatesProps {
  templateId: number;
  questionnaireData: QuestionnaireData;
  viewMode: 'desktop' | 'tablet' | 'mobile';
}

const PreviewTemplates: React.FC<PreviewTemplatesProps> = ({
  templateId,
  questionnaireData,
  viewMode
}) => {
  // Generate a primary color from extracted colors or use a default
  const getPrimaryColor = () => {
    if (questionnaireData.extractedColors.length > 0) {
      return questionnaireData.extractedColors[0];
    }
    return '#3B82F6'; // Default blue
  };
  
  // Generate a secondary color from extracted colors or use a default
  const getSecondaryColor = () => {
    if (questionnaireData.extractedColors.length > 1) {
      return questionnaireData.extractedColors[1];
    }
    return '#10B981'; // Default green
  };
  
  // Generate an accent color from extracted colors or use a default
  const getAccentColor = () => {
    if (questionnaireData.extractedColors.length > 2) {
      return questionnaireData.extractedColors[2];
    }
    return '#F59E0B'; // Default yellow
  };
  
  const renderTemplate1 = () => {
    const primaryColor = getPrimaryColor();
    const secondaryColor = getSecondaryColor();
    
    return (
      <div className="template-preview w-full">
        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-white shadow-md" style={{ borderBottom: `3px solid ${primaryColor}` }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="font-bold text-xl" style={{ color: primaryColor }}>{questionnaireData.businessName || 'Your Business'}</span>
              </div>
              <div className={`hidden md:flex items-center space-x-4 ${viewMode === 'mobile' ? 'hidden' : ''}`}>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Services</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex ${viewMode === 'mobile' ? 'flex-col' : 'flex-row'} items-center`}>
              <div className={`${viewMode === 'mobile' ? 'w-full' : 'w-1/2'} pr-4`}>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                  {questionnaireData.businessName || 'Your Business Name'}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {questionnaireData.missionStatement || 'Your mission statement will appear here.'}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="px-6 py-3 rounded-md text-white font-medium"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 rounded-md font-medium border"
                    style={{ color: primaryColor, borderColor: primaryColor }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className={`${viewMode === 'mobile' ? 'w-full mt-8' : 'w-1/2'}`}>
                <img
                  src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Hero"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <div className="h-1 w-20 mx-auto" style={{ backgroundColor: secondaryColor }}></div>
            </div>
            
            <div className={`${viewMode === 'mobile' ? 'flex-col' : 'flex'} space-y-8 md:space-y-0 md:space-x-8`}>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  {questionnaireData.missionStatement || 
                    'Our mission is to provide the highest quality products and services to our customers while maintaining the highest standards of integrity and excellence.'}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  {questionnaireData.visionStatement || 
                    'We envision a world where our innovative solutions make a positive impact on the lives of our customers and communities.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <div className="h-1 w-20 mx-auto" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-gray-600 mt-4">
                {`What ${questionnaireData.businessName || 'we'} can do for you`}
              </p>
            </div>
            
            <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} gap-8`}>
              {[1, 2, 3].map(index => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
                >
                  <div className="h-40 bg-gray-200">
                    <img
                      src={`https://images.pexels.com/photos/${2000000 + index * 157}/pexels-photo-${2000000 + index * 157}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`Service ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
                      Service {index}
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-sm font-medium"
                      style={{ color: primaryColor }}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <div className="h-1 w-20 mx-auto" style={{ backgroundColor: secondaryColor }}></div>
            </div>
            
            <div className={`${viewMode === 'mobile' ? 'flex-col' : 'flex'} space-y-8 md:space-y-0 md:space-x-8`}>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <span>{questionnaireData.contactInfo.email || 'contact@yourbusiness.com'}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-gray-500" />
                    <span>{questionnaireData.contactInfo.phone || '+1 (555) 123-4567'}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-1" />
                    <span>{questionnaireData.contactInfo.address || '123 Main St, City, State, ZIP'}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {questionnaireData.socialMedia.facebook && (
                      <a href={questionnaireData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.instagram && (
                      <a href={questionnaireData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6 text-gray-600 hover:text-pink-600" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.twitter && (
                      <a href={questionnaireData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-6 w-6 text-gray-600 hover:text-blue-400" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.linkedin && (
                      <a href={questionnaireData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="px-6 py-3 text-white font-medium rounded-md"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'text-center' : 'flex justify-between items-center'}`}>
              <div>
                <p className="font-bold text-lg">{questionnaireData.businessName || 'Your Business'}</p>
                <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
              
              <div className={`${viewMode === 'mobile' ? 'mt-4' : ''}`}>
                <div className="flex space-x-4 justify-center md:justify-end">
                  <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  const renderTemplate2 = () => {
    const primaryColor = getPrimaryColor();
    const secondaryColor = getSecondaryColor();
    const accentColor = getAccentColor();
    
    return (
      <div className="template-preview w-full">
        {/* Navigation - Creative Style */}
        <nav className="sticky top-0 z-10 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <span className="font-extrabold text-2xl" style={{ color: accentColor }}>
                  {questionnaireData.businessName || 'CREATIVE STUDIO'}
                </span>
              </div>
              <div className={`hidden md:flex items-center space-x-6 ${viewMode === 'mobile' ? 'hidden' : ''}`}>
                <a href="#" className="text-sm uppercase tracking-wide hover:text-gray-300">Home</a>
                <a href="#" className="text-sm uppercase tracking-wide hover:text-gray-300">Work</a>
                <a href="#" className="text-sm uppercase tracking-wide hover:text-gray-300">About</a>
                <a href="#" className="text-sm uppercase tracking-wide hover:text-gray-300">Services</a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-sm text-sm uppercase tracking-wide"
                  style={{ backgroundColor: accentColor, color: '#000' }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Section - Bold, Creative */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'text-center' : 'text-left'}`}>
              <h1 
                className="text-5xl sm:text-6xl font-black mb-6 leading-tight"
                style={{ color: primaryColor }}
              >
                CREATIVE.<br />BOLD.<br />UNIQUE.
              </h1>
              <div className="h-2 w-32 mb-8" style={{ backgroundColor: accentColor }}></div>
              <p className="text-xl max-w-2xl mb-10 text-gray-300">
                {questionnaireData.missionStatement || 'We create extraordinary designs that capture attention and deliver results.'}
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 text-gray-900 font-bold text-sm uppercase tracking-wide"
                style={{ backgroundColor: accentColor }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <div className="h-1 w-20" style={{ backgroundColor: secondaryColor }}></div>
            </div>
            
            <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
              {[1, 2, 3, 4].map(index => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                  style={{ height: '400px' }}
                >
                  <img
                    src={`https://images.pexels.com/photos/${3000000 + index * 271}/pexels-photo-${3000000 + index * 271}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={`Project ${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">Project {index}</h3>
                      <p className="text-gray-300 mb-4">
                        Branding, Design, {index % 2 === 0 ? 'Web Development' : 'Marketing'}
                      </p>
                      <a
                        href="#"
                        className="inline-block text-sm uppercase tracking-wide"
                        style={{ color: accentColor }}
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <div className="h-1 w-20 mx-auto" style={{ backgroundColor: secondaryColor }}></div>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                We offer a range of creative services to help your business stand out.
              </p>
            </div>
            
            <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-4'} gap-8`}>
              {['Branding', 'Web Design', 'UX/UI', 'Marketing'].map((service, index) => (
                <div key={service} className="text-center">
                  <div
                    className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4"
                    style={{ backgroundColor: index === 0 ? primaryColor : 
                                            index === 1 ? secondaryColor : 
                                            index === 2 ? accentColor : 
                                            '#9333EA' }}
                  >
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-gray-600">
                    Professional {service.toLowerCase()} services tailored to your unique business needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16" style={{ backgroundColor: primaryColor }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl italic mb-6">
                "Working with {questionnaireData.businessName || 'this team'} was an incredible experience. They delivered beyond our expectations and helped transform our brand."
              </p>
              <p className="font-bold">Jane Smith, CEO of Acme Inc.</p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'flex-col space-y-8' : 'flex space-x-8'}`}>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <div className="h-1 w-20 mb-8" style={{ backgroundColor: accentColor }}></div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" style={{ color: accentColor }} />
                    <span>{questionnaireData.contactInfo.email || 'studio@creative.com'}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" style={{ color: accentColor }} />
                    <span>{questionnaireData.contactInfo.phone || '+1 (555) 987-6543'}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1" style={{ color: accentColor }} />
                    <span>{questionnaireData.contactInfo.address || '456 Creative Ave, Design District, NY 10001'}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex space-x-4">
                    {questionnaireData.socialMedia.facebook && (
                      <a href={questionnaireData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6 text-white hover:text-gray-300" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.instagram && (
                      <a href={questionnaireData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6 text-white hover:text-gray-300" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.twitter && (
                      <a href={questionnaireData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-6 w-6 text-white hover:text-gray-300" />
                      </a>
                    )}
                    
                    {questionnaireData.socialMedia.linkedin && (
                      <a href={questionnaireData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-white hover:text-gray-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-accent text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-accent text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-accent text-white"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 font-bold text-gray-900 uppercase tracking-wide"
                    style={{ backgroundColor: accentColor }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-black text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'text-center' : 'flex justify-between items-center'}`}>
              <div>
                <p className="font-bold" style={{ color: accentColor }}>
                  {questionnaireData.businessName || 'CREATIVE STUDIO'}
                </p>
                <p className="text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
              
              <div className={`${viewMode === 'mobile' ? 'mt-4' : ''}`}>
                <div className="flex space-x-4 justify-center md:justify-end">
                  <a href="#" className="text-sm hover:text-white">Privacy</a>
                  <a href="#" className="text-sm hover:text-white">Terms</a>
                  <a href="#" className="text-sm hover:text-white">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  const renderTemplate3 = () => {
    const primaryColor = getPrimaryColor();
    const secondaryColor = getSecondaryColor();
    const accentColor = getAccentColor();
    
    return (
      <div className="template-preview w-full">
        {/* Navigation - Minimal Style */}
        <nav className="sticky top-0 z-10 bg-white shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-xl tracking-tight" style={{ color: primaryColor }}>
                  {questionnaireData.businessName || 'minima.'}
                </span>
              </div>
              <div className={`hidden md:flex items-center space-x-8 ${viewMode === 'mobile' ? 'hidden' : ''}`}>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Products</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Section - Minimal */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'text-center' : 'text-left max-w-3xl'}`}>
              <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Minimal design.<br />
                Maximum impact.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                {questionnaireData.missionStatement || 'We create beautiful, minimalist designs that let your products speak for themselves.'}
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 rounded-full text-white text-sm"
                style={{ backgroundColor: primaryColor }}
              >
                Explore Collection
              </a>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-10">Featured Products</h2>
            
            <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'} gap-8`}>
              {[1, 2, 3, 4, 5, 6].map(index => (
                <div key={index} className="group">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={`https://images.pexels.com/photos/${4000000 + index * 83}/pexels-photo-${4000000 + index * 83}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`Product ${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Product {index}</h3>
                    <p className="text-gray-500">$99.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16" style={{ backgroundColor: secondaryColor }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-white mb-6">Join Our Newsletter</h2>
            <p className="text-white opacity-80 max-w-2xl mx-auto mb-8">
              Subscribe to get special offers, free giveaways, and product launches.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className={`${viewMode === 'mobile' ? 'flex-col space-y-4' : 'flex'}`}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-l-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                />
                <button
                  type="submit"
                  className={`px-6 py-3 font-medium text-white bg-gray-900 ${
                    viewMode === 'mobile' ? 'rounded-full w-full' : 'rounded-r-full'
                  }`}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'flex-col space-y-8' : 'flex space-x-8 items-center'}`}>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
                <div className="h-1 w-16 mb-6" style={{ backgroundColor: accentColor }}></div>
                
                <p className="text-gray-600 mb-6">
                  {questionnaireData.visionStatement || 
                    'We believe in the power of simplicity. Our journey started with a vision to create products that combine functionality with minimal aesthetics.'}
                </p>
                
                <p className="text-gray-600 mb-6">
                  Every product is thoughtfully designed with attention to detail and commitment to quality.
                </p>
                
                <a
                  href="#"
                  className="inline-block px-6 py-2 border rounded-full text-sm"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-10">Contact Us</h2>
            
            <div className={`${viewMode === 'mobile' ? 'flex-col space-y-8' : 'flex space-x-8'}`}>
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 text-white rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-4 text-gray-900">Visit Our Store</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-gray-500" />
                      <span>{questionnaireData.contactInfo.email || 'hello@minima.com'}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-gray-500" />
                      <span>{questionnaireData.contactInfo.phone || '+1 (555) 234-5678'}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-1" />
                      <span>{questionnaireData.contactInfo.address || '789 Minimalist Blvd, Design City, CA 90210'}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-3 text-gray-900">Store Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 10am - 7pm</p>
                    <p className="text-gray-600">Saturday: 11am - 6pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-3 text-gray-900">Follow Us</h4>
                    <div className="flex space-x-4">
                      {questionnaireData.socialMedia.facebook && (
                        <a href={questionnaireData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                        </a>
                      )}
                      
                      {questionnaireData.socialMedia.instagram && (
                        <a href={questionnaireData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                        </a>
                      )}
                      
                      {questionnaireData.socialMedia.twitter && (
                        <a href={questionnaireData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                        </a>
                      )}
                      
                      {questionnaireData.socialMedia.linkedin && (
                        <a href={questionnaireData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-10 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${viewMode === 'mobile' ? 'text-center' : 'flex justify-between items-center'}`}>
              <div>
                <span className="font-medium tracking-tight" style={{ color: primaryColor }}>
                  {questionnaireData.businessName || 'minima.'}
                </span>
                <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
              
              <div className={`${viewMode === 'mobile' ? 'mt-4' : ''}`}>
                <div className="flex space-x-6 justify-center md:justify-end">
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Shipping Info</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  switch (templateId) {
    case 1:
      return renderTemplate1();
    case 2:
      return renderTemplate2();
    case 3:
      return renderTemplate3();
    default:
      return renderTemplate1();
  }
};

export default PreviewTemplates;