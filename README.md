# WendyWebgen - Automatic Website Generator for WIX

A beautiful, production-ready website generator that creates custom websites based on user questionnaires. Built with React, TypeScript, and Tailwind CSS.

## Features

- **8-Step Questionnaire**: Comprehensive form covering business basics, target audience, branding, design preferences, and more
- **Logo Color Extraction**: Upload logos to automatically extract brand colors
- **Multiple Templates**: Choose from professional, creative, or minimalist design templates
- **Responsive Preview**: See how your website looks on desktop, tablet, and mobile
- **WIX Integration Ready**: Designed to export websites to the WIX platform

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/WendyWebgen.git
cd WendyWebgen
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## Project Structure

```
src/
├── components/          # React components
│   ├── ColorExtractor.tsx
│   ├── PreviewTemplates.tsx
│   ├── ProgressBar.tsx
│   ├── QuestionnaireForm.tsx
│   └── WebsitePreview.tsx
├── types/              # TypeScript type definitions
│   └── types.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Features Overview

### Questionnaire Steps

1. **Business Basics** - Name, type, industry
2. **Target Audience** - Customer demographics and interests
3. **Branding & Logo** - Logo upload with color extraction
4. **Design Preferences** - Style selection and color preferences
5. **Mission & Vision** - Company purpose and goals
6. **Website Features** - Select desired functionality
7. **Contact Information** - Business details and social media
8. **Final Review** - Summary before generation

### Template Styles

- **Template 1**: Professional & Clean - Perfect for corporate and service businesses
- **Template 2**: Creative & Bold - Ideal for creative agencies and portfolios
- **Template 3**: Modern & Minimalist - Great for retail and product-focused businesses

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.