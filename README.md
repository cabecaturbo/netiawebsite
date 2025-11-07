# Netia Website

> **AI-powered customer service chatbot platform**  
> Never miss another appointment with 24/7 AI receptionist that answers questions and schedules instantly.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)

## 🚀 What Netia Does

Netia is an AI-powered customer service platform that helps businesses:
- **Turn every visitor into a booked appointment** - Instant answers to customer questions
- **Capture customer information automatically** - Collect contact details and preferences
- **Know your practice inside out** - AI remembers hours, services, and pricing
- **Fast, no-code setup** - Add a single script and start helping customers in minutes

Perfect for businesses looking to provide 24/7 customer service without hiring additional staff.

## 📁 Repository Structure

```
/
├── app/                     # Next.js app directory (pages, API routes)
├── components/              # React components
├── src/                     # Source files (integrations, hooks, config)
├── public/                  # Static assets
├── __tests__/              # Test files
└── README.md
```

## ⚡ Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd netiawebsite
npm install
```

### 2. Environment Setup
```bash
cp env.example .env
# Edit .env with your API keys (see below)
```

### 3. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🔑 Required Environment Variables

### Core Configuration
```bash
# Netia Backend API
NETIA_API_URL=https://app.netia.ai

# Stripe Configuration (for signup flow)
STRIPE_SECRET_KEY=sk_live_... # or sk_test_... for testing
STRIPE_PRICE_ID=price_... # Get from Stripe Dashboard → Products → Prices
# OR use monthly price in cents (e.g., 9900 for $99/month)
# STRIPE_MONTHLY_PRICE_CENTS=9900

# Base URL for Stripe redirects
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # or https://yourdomain.com for production
```

### Optional Integrations

#### Papercups Chat
```bash
PAPERCUPS_ENABLED=false
PAPERCUPS_ACCOUNT_ID=
PAPERCUPS_TOKEN=
PAPERCUPS_INBOX_ID=
PAPERCUPS_HOST=https://app.papercups.io
```

#### EmailJS (for waitlist form)
```bash
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_USER_ID=
```

## 🏗️ Architecture Overview

### Website (`app/`)
- **Tech**: Next.js 14 + Tailwind CSS + App Router
- **Features**: Landing pages, signup flow, Stripe integration, API routes
- **SEO**: Optimized metadata, sitemap, and robots.txt
- **Integrations**: Stripe checkout, Papercups chat, EmailJS waitlist

### Key Features

#### Signup Flow
- User registration with backend API
- Stripe checkout integration with 7-day free trial
- Subscription management and cancellation portal
- Secure token handling and account linking

#### Pages
- **Home**: Hero section, features, process, performance metrics
- **Pricing**: Subscription plans and pricing information
- **Features**: Detailed feature pages (chat, multi-tenant, profiles)
- **Signup**: Registration and checkout flow
- **About, Help, Terms, Privacy, Security**: Legal and informational pages

#### API Routes
- `/api/register` - User registration
- `/api/checkout/create` - Create Stripe checkout session
- `/api/checkout/verify` - Verify Stripe payment
- `/api/stripe/link` - Link Stripe account to user
- `/api/cancel/*` - Subscription cancellation flow
- `/api/waitlist` - Waitlist form submission
- `/api/contact` - Contact form submission
- `/api/papercups/webhook` - Papercups webhook handler

## 🛠️ Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

### Tech Stack
- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Payments**: Stripe
- **Chat**: Papercups (optional)
- **Forms**: EmailJS (optional)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Build command: `npm run build`
4. Output directory: `.next`
5. Deploy

### Environment Variables for Production
Make sure to set all required environment variables in your deployment platform:
- `NETIA_API_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID` or `STRIPE_MONTHLY_PRICE_CENTS`
- `NEXT_PUBLIC_BASE_URL` (your production domain)

## 📚 Documentation

Documentation for the signup flow and API routes can be found in the codebase comments and inline documentation.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check this README
- **Issues**: Open GitHub issue with detailed description
- **Email**: support@netia.ai

---

**Built with ❤️ for businesses**  
*Never miss another appointment with Netia AI*
