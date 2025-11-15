# GrooVITy Music Club - Project Documentation

## Overview

GrooVITy is a music and hip-hop technoculture club web application for VIT (Vellore Institute of Technology). The platform serves as a digital hub for the club's activities, featuring event management, music catalogue browsing, beat marketplace, and club information. The application combines a dark, immersive aesthetic inspired by urban music culture with modern web technologies to create an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router

**UI Component System**
- **shadcn/ui** component library (New York style variant) providing pre-built, accessible components built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- Custom theming system with CSS variables for colors and design tokens

**Design Philosophy**
- Dark mode-first design with rich blacks and vibrant yellow accents
- Reference-based approach inspired by Azadi Records, Mass Appeal India, Spotify, and SoundCloud
- Typography: Montserrat for headers (bold, street culture vibe) and Inter for body text
- Responsive grid layouts with mobile-first approach
- Scroll-based animations using Intersection Observer API

**State Management**
- **TanStack Query (React Query)** for server state management and caching
- Local React state (useState, useRef) for component-level UI state
- No global state management library (Redux/Zustand) - intentionally kept simple

**Key Features**
- Home page with hero video section and featured events
- Catalogue page for browsing music tracks with embedded audio players
- Events page with registration modals and event filtering (upcoming/live/past)
- Beats marketplace for purchasing producer-created beats
- About page describing club mission and values
- Reusable modal components for event registration and beat purchases

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ES modules (type: "module") for modern JavaScript syntax
- Custom Vite integration for serving the React frontend in development
- Middleware for JSON parsing and request logging

**Current State**
- Minimal backend implementation with placeholder route registration
- In-memory storage implementation (MemStorage) for development/testing
- Prepared for database integration through storage interface abstraction

**Storage Interface**
- Defined IStorage interface for CRUD operations (users only currently)
- MemStorage class provides in-memory implementation
- Designed to be easily swapped with database-backed storage (PostgreSQL with Drizzle ORM)

### Data Storage

**Database Setup (Configured but Not Implemented)**
- **PostgreSQL** database using Neon serverless connector
- **Drizzle ORM** for type-safe database queries and schema management
- **Drizzle Kit** for schema migrations
- Current schema includes only a users table with UUID primary keys

**Schema Design**
- Users table: id (UUID), username (unique), password
- Zod schemas generated from Drizzle schemas for validation
- Database URL expected via environment variable

**Session Management**
- **express-session** with **connect-pg-simple** for PostgreSQL session storage (configured in dependencies)
- Session data would persist across server restarts

### External Dependencies

**UI Libraries**
- **Radix UI** primitives (@radix-ui/*) for accessible, unstyled components
- **Lucide React** for consistent icon set
- **Embla Carousel** for carousel/slider functionality
- **cmdk** for command palette UI pattern

**Form Handling**
- **React Hook Form** for performant form state management
- **@hookform/resolvers** with **Zod** for schema-based validation
- **drizzle-zod** for generating Zod schemas from database models

**Utilities**
- **clsx** and **tailwind-merge** for conditional className composition
- **date-fns** for date manipulation and formatting
- **nanoid** for generating unique IDs

**Development Tools**
- **Replit plugins** for runtime error overlay, development banner, and cartographer
- **esbuild** for server-side bundling in production
- **tsx** for running TypeScript in development

**Asset Management**
- Static assets stored in `attached_assets` directory
- Club logo and images served directly
- Demo video and audio URLs from external CDNs (Mixkit, SoundHelix)

**Notes**
- Currently using mock data (TODO comments indicate removal needed)
- No authentication/authorization implemented yet
- No API routes defined - backend is a skeleton ready for implementation
- Database configured but not actively used (in-memory storage is active)