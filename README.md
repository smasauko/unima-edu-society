# UNIMA Education Society Website

## Overview
This is the official website for the University Of Malawi Education Society, built with modern web technologies to provide information about the society, its executive members, announcements, and more.

## Features
- Responsive design for mobile and desktop
- Hero section with society information
- About section
- Announcements board
- Executive members showcase
- FAQs section
- Contact footer
- Authentication portal (login/signup)

## Technology Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Heroicons, React Icons
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Linting:** ESLint

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Images and static files
└── main.jsx       # App entry point
```

## Contributing
Please follow the existing code style and commit conventions.

## License
This project is licensed under the MIT License.

Copyright (c) 2026 Spencer Masauko

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
