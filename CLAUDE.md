# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js marketing website called "Salient" built with:
- **Next.js 14** (App Router)
- **Tailwind CSS v4** with custom theme configuration
- **React 18** with TypeScript support
- **Headless UI** for interactive components
- **Prettier** with Tailwind plugin for code formatting

The project is based on a Tailwind Plus template and represents a SaaS product called "OyDocs" (accounting software for small businesses).

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### App Structure
- Uses Next.js App Router (`/src/app/` directory)
- Main layout in `src/app/layout.jsx` with Inter and Lexend fonts
- Landing page sections composed from individual components
- Authentication pages in `src/app/(auth)/` route group

### Components
- All components in `src/components/` directory
- Reusable UI components: Button, Container, Logo, NavLink, Fields
- Landing page sections: Hero, PrimaryFeatures, SecondaryFeatures, Testimonials, Pricing, Faqs, CallToAction
- Layout components: Header, Footer, SlimLayout (for auth pages)

### Styling
- Tailwind CSS v4 with custom theme in `src/styles/tailwind.css`
- Custom CSS variables for typography, spacing, and fonts
- Responsive design with mobile navigation
- Uses `clsx` for conditional class names

### TypeScript Configuration
- Configured with strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- Supports both `.jsx` and `.tsx` files

### Code Style
- Prettier configured with single quotes, no semicolons
- Tailwind plugin for class sorting
- ESLint extends Next.js core web vitals rules

## Key Implementation Details

- Landing page is a single-page application with anchor navigation
- Authentication pages use SlimLayout wrapper
- Mobile navigation uses Headless UI Popover component
- Images stored in `src/images/` with organized subdirectories
- Component composition pattern for landing page sections