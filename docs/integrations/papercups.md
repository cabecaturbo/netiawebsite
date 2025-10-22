# Papercups Integration

This document describes the Papercups integration for the Netia website. The integration provides a clean, modular way to add Papercups chat widget functionality to the application.

## Overview

The Papercups integration is designed to be:
- **Non-disruptive**: Safe to merge while core logic is in progress
- **Feature-flagged**: Only active when `PAPERCUPS_ENABLED=true`
- **Modular**: Isolated to new files with minimal glue points
- **Type-safe**: Full TypeScript support with proper interfaces

## What It Does

The integration provides:
- Automatic Papercups widget initialization on the client
- React hooks for programmatic control
- Server-side webhook handling for Papercups events
- User identification and message sending capabilities
- Feature flag gating to enable/disable functionality

## How to Enable

1. Set the environment variable:
   ```bash
   PAPERCUPS_ENABLED=true
   ```

2. Configure required environment variables:
   ```bash
   PAPERCUPS_ACCOUNT_ID=your-account-id
   PAPERCUPS_TOKEN=your-webhook-token  # Optional, for webhook verification
   PAPERCUPS_INBOX_ID=your-inbox-id    # Optional
   PAPERCUPS_HOST=https://app.papercups.io  # Optional, defaults to Papercups
   ```

3. The integration will automatically initialize when the app loads.

## Required Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PAPERCUPS_ENABLED` | Yes | Set to `"true"` to enable the integration |
| `PAPERCUPS_ACCOUNT_ID` | Yes | Your Papercups account ID |
| `PAPERCUPS_TOKEN` | No | Webhook verification token |
| `PAPERCUPS_INBOX_ID` | No | Specific inbox ID to use |
| `PAPERCUPS_HOST` | No | Custom Papercups host (defaults to `https://app.papercups.io`) |

## Usage

### React Hook

Use the `usePapercups` hook in your components:

```tsx
import { usePapercups } from '@/src/hooks/usePapercups';

function MyComponent() {
  const { enabled, openChat, closeChat, sendMessage, identifyUser } = usePapercups();

  const handleOpenChat = () => {
    if (enabled) {
      openChat();
    }
  };

  const handleIdentifyUser = () => {
    identifyUser({
      id: 'user-123',
      name: 'John Doe',
      email: 'john@example.com',
      metadata: { plan: 'premium' }
    });
  };

  return (
    <div>
      <button onClick={handleOpenChat}>Open Chat</button>
      <button onClick={handleIdentifyUser}>Identify User</button>
    </div>
  );
}
```

### Direct Integration Service

For more control, use the integration service directly:

```tsx
import { initPapercups } from '@/src/integrations/papercupsIntegration';
import { getPapercupsConfig } from '@/src/config/integrations/papercups';

const config = getPapercupsConfig();
const client = initPapercups(config);

if (client) {
  client.open();
  client.identifyUser({ id: 'user-123', name: 'John Doe' });
}
```

## Server-Side Webhooks

The integration includes a webhook handler at `/api/papercups/webhook` that processes:
- `message.created` - New messages from customers
- `conversation.updated` - Conversation state changes
- `customer.created` - New customer registrations

### Webhook Configuration

1. Set up your webhook URL in Papercups dashboard:
   ```
   https://yourdomain.com/api/papercups/webhook
   ```

2. Configure the webhook to send the following events:
   - Message created
   - Conversation updated
   - Customer created

3. The webhook handler will automatically process these events and log them to the console.

## File Structure

```
web/
├── src/
│   ├── config/integrations/
│   │   └── papercups.ts              # Configuration and types
│   ├── integrations/
│   │   └── papercupsIntegration.ts  # Core integration service
│   ├── hooks/
│   │   └── usePapercups.ts          # React hook
│   └── components/integrations/
│       └── PapercupsBootstrap.tsx   # Bootstrap component
├── app/api/papercups/webhook/
│   └── route.ts                     # Webhook handler
├── __tests__/integrations/
│   └── papercups.integration.test.ts # Tests
└── docs/integrations/
    └── papercups.md                 # This documentation
```

## Bootstrap Integration

The integration is automatically bootstrapped in the root layout (`app/layout.tsx`). The `PapercupsBootstrap` component:
- Runs only on the client side
- Initializes Papercups when enabled
- Renders nothing (side-effect only)
- Is safe to include even when disabled

## Disabling the Integration

To disable the integration:
1. Set `PAPERCUPS_ENABLED=false` or remove the environment variable
2. All hooks will return no-op functions
3. No Papercups scripts will be loaded
4. No runtime side effects will occur

## Development

### Running Tests

```bash
npm test -- __tests__/integrations/papercups.integration.test.ts
```

### Type Checking

The integration is fully typed with TypeScript. All interfaces are defined in `src/config/integrations/papercups.ts`.

## Troubleshooting

### Widget Not Loading
- Check that `PAPERCUPS_ENABLED=true`
- Verify `PAPERCUPS_ACCOUNT_ID` is set correctly
- Check browser console for errors
- Ensure you're on a client-side rendered page

### Webhook Not Working
- Verify the webhook URL is correct
- Check that `PAPERCUPS_TOKEN` is set if using signature verification
- Look at server logs for webhook processing errors

### Type Errors
- Ensure all imports use the correct path aliases (`@/src/...`)
- Check that TypeScript is configured properly
- Verify all interfaces are properly exported

## Security Notes

- Never commit environment variables to version control
- Use the webhook token for signature verification in production
- The integration only loads on the client side to avoid SSR issues
- All user data is handled according to Papercups' privacy policy

## Support

For issues with the integration:
1. Check the browser console for client-side errors
2. Check server logs for webhook processing errors
3. Verify environment variables are set correctly
4. Test with `PAPERCUPS_ENABLED=false` to ensure no side effects when disabled

