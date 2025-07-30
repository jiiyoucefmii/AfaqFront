# Afaq Frontend

A modern React application for Afaq project.

## Project Structure ( to be updated )

```
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   └── LandingPage.jsx
│   │   └── App.jsx
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── Footer.css
│   │       ├── index.css
│   │       ├── LandingPage.css
│   │       ├── Layout.css
│   │       └── Navbar.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/afaq-frontend.git
   cd afaq-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure Explanation

- `src/app/`: Contains the main application component and page components
- `src/assets/`: Contains static assets like images and stylesheets
- `src/components/`: Contains reusable components
  - `layout/`: Components for the application layout (navbar, footer, etc.)
  - `ui/`: Reusable UI components
- `src/main.jsx`: Entry point of the application

## Adding New Pages

To add a new page:

1. Create a new component in `src/app/pages/`
2. Add a new route in `src/app/App.jsx`

Example:

```jsx
// In src/app/pages/AboutPage.jsx
import React from 'react'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      {/* Content here */}
    </div>
  )
}

export default AboutPage

// In src/app/App.jsx, add the new route
import AboutPage from './pages/AboutPage'

// Inside the Routes component
<Route path="/about" element={<AboutPage />} />
```

## License

This project is licensed under the MIT License.