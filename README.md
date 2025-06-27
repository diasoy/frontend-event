# Frontend Event Management System

This is the frontend application for the Event Management System built with Next.js, React, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Copy environment file:

```bash
cp .env.example .env
```

3. Update the `.env` file with your configuration:
   - Backend API URL
   - NextAuth configuration
   - Midtrans configuration

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on http://localhost:3001

### Production Mode

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Environment Variables

Check `.env.example` for all required environment variables:

- `NEXT_PUBLIC_API_URL`: Backend API URL (http://localhost:3000/api)
- `NEXTAUTH_SECRET`: Secret for NextAuth
- `NEXTAUTH_URL`: NextAuth callback URL
- `NEXT_PUBLIC_MIDTRANS_SNAP_URL`: Midtrans Snap URL
- `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY`: Midtrans client key

## Features

- User Authentication (Register, Login, Profile)
- Event Browsing and Management
- Order Management and History
- Payment Integration with Midtrans
- Admin Dashboard
- Member Dashboard
- Responsive Design
- Server-side Rendering with Next.js

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- React Query for state management
- Axios for API calls
- Hero UI for components
- React Hook Form for forms

## Pages Structure

- `/` - Landing page
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/event/[slug]` - Event details
- `/admin/*` - Admin dashboard (protected)
- `/member/*` - Member dashboard (protected)
- `/payment/*` - Payment pages

## Development Notes

- The app runs on port 3001 to avoid conflicts with the backend (port 3000)
- Authentication is handled with NextAuth.js
- API calls are made through Axios with automatic token injection
- The app uses middleware for route protection

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
