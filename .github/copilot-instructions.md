# Copilot Instructions for Beelio

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Beelio is a peer-to-peer lending platform MVP focused on microloans for unbanked users in Africa. The application enables borrowers to request loans and lenders to fund them.

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript and App Router
- **Backend**: Supabase (database, authentication, real-time)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Architecture Patterns
- Use Server Components where possible for better performance
- Implement proper TypeScript types for all data structures
- Follow Next.js App Router conventions
- Use Supabase Row Level Security (RLS) for data access control

## Key Features
1. User Authentication with role-based access (Borrower/Lender)
2. Loan request system with approval workflow
3. Dashboard views for different user roles
4. Real-time updates for loan status changes
5. Simple admin functionality

## Database Schema
- `profiles` table: user profiles with role information
- `loans` table: loan requests and their status
- Use UUID for primary keys
- Implement proper foreign key relationships

## Code Style
- Use functional components with hooks
- Prefer server-side data fetching where appropriate
- Implement proper error handling and loading states
- Use semantic HTML and accessible components
- Follow the existing project structure and naming conventions
