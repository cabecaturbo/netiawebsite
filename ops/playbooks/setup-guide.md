# Netia Med-Spa Stack Setup Guide

## Quick Start (5 minutes)

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd netia-medspa-stack
pnpm install
```

### 2. Environment Setup
```bash
cp env.example .env
# Edit .env with your API keys
```

### 3. Run Lead Generation
```bash
pnpm leadgen:run
```

### 4. Generate Outreach Campaign
```bash
pnpm outreach:prep
```

### 5. Start Bot Server
```bash
pnpm bot:dev
```

### 6. Start Landing Site
```bash
pnpm site:dev
```

## Detailed Setup

### Prerequisites
- Node.js 18+
- pnpm 8+
- Google Places API key (optional)
- OpenAI API key (for bot)
- Calendly account

### API Keys Required

#### Google Places API (for leadgen)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Places API
3. Create API key
4. Add to `.env`: `GOOGLE_PLACES_API_KEY=your_key_here`

#### OpenAI API (for bot)
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create API key
3. Add to `.env`: `OPENAI_API_KEY=your_key_here`

#### Calendly Integration
1. Create Calendly account
2. Set up med-spa demo event
3. Add to `.env`: `CALENDLY_URL=https://calendly.com/yourname/medspa-demo`

### Deployment

#### Bot Server (Railway/Render)
1. Connect your GitHub repo
2. Set environment variables
3. Deploy from main branch
4. Update `NEXT_PUBLIC_BOT_ENDPOINT` in site

#### Landing Site (Vercel)
1. Connect GitHub repo
2. Set build command: `cd apps/site && npm run build`
3. Set output directory: `apps/site/.next`
4. Deploy

#### GitHub Actions Setup
1. Add secrets to GitHub repository:
   - `GOOGLE_PLACES_API_KEY`
   - `SERPAPI_API_KEY` (optional)
   - `LEADGEN_CITIES`
   - `LEADGEN_QUERY_TERMS`
   - `OUTREACH_LIMIT`
   - `OUTREACH_VARIANTS`

## Usage

### Daily Lead Generation
The GitHub Action runs automatically daily at 2 PM PT. It:
1. Scrapes new leads from Google Places
2. Enriches with website data
3. Scores leads 1-5
4. Generates outreach campaigns
5. Commits results to `ops/samples/outbox/`

### Manual Lead Generation
```bash
# Generate leads for specific cities
LEADGEN_CITIES="Los Angeles,New York" pnpm leadgen:run

# Generate outreach for specific lead file
pnpm outreach:prep leads-2024-01-15.csv
```

### Bot Customization
1. Edit `ops/samples/faq.medspa.yaml` for FAQ training
2. Update bot responses in `apps/bot/src/services/chat-service.ts`
3. Modify intent detection in `apps/bot/src/services/intent-service.ts`

### Landing Page Customization
1. Edit components in `apps/site/app/components/`
2. Update pricing in `Pricing.tsx`
3. Modify FAQ in `FAQ.tsx`
4. Update branding and colors in `globals.css`

## Troubleshooting

### Common Issues

#### Leadgen fails with "No API key"
- Add `GOOGLE_PLACES_API_KEY` to `.env`
- Or use mock data (automatically falls back)

#### Bot doesn't respond
- Check `OPENAI_API_KEY` is set
- Verify bot server is running
- Check `NEXT_PUBLIC_BOT_ENDPOINT` in site

#### Site build fails
- Run `pnpm build` in `apps/site/`
- Check for TypeScript errors
- Verify all dependencies installed

#### GitHub Action fails
- Check all required secrets are set
- Verify API keys are valid
- Check repository permissions

### Performance Optimization

#### Leadgen
- Reduce `LEADGEN_CITIES` for faster runs
- Increase `concurrency` in config for parallel processing
- Use `SERPAPI_API_KEY` for better ad detection

#### Bot
- Implement caching for FAQ responses
- Use rate limiting for production
- Monitor API usage and costs

#### Site
- Optimize images with Next.js Image component
- Enable compression
- Use CDN for static assets

## Support

For issues or questions:
1. Check this guide first
2. Review error logs
3. Open GitHub issue with details
4. Contact support@netia.ai

## Next Steps

1. **Customize for your clinic**: Update FAQ, branding, pricing
2. **Set up monitoring**: Add error tracking and analytics
3. **Scale up**: Increase lead volume and bot capacity
4. **Integrate**: Connect to your CRM and booking systems
5. **Optimize**: A/B test messaging and improve conversion rates
