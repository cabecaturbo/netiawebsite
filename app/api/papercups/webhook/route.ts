import { NextRequest, NextResponse } from 'next/server';
import { getPapercupsConfig } from '@/src/config/integrations/papercups';

interface PapercupsWebhookPayload {
  type: string;
  data: {
    id: string;
    body: string;
    created_at: string;
    customer_id?: string;
    user_id?: string;
    conversation_id?: string;
    metadata?: Record<string, unknown>;
  };
}

/**
 * Verify Papercups webhook signature (if they provide one)
 * This is a placeholder - implement based on Papercups documentation
 */
function verifySignature(): boolean {
  // TODO: Implement signature verification based on Papercups webhook documentation
  // For now, we'll return true as a placeholder
  return true;
}

/**
 * Handle Papercups webhook events
 * POST /api/papercups/webhook
 */
export async function POST(request: NextRequest) {
  try {
    const config = getPapercupsConfig();
    
    // Check if Papercups is enabled
    if (!config.enabled) {
      return NextResponse.json(
        { error: 'Papercups integration is disabled' },
        { status: 403 }
      );
    }

    // Get the raw body for signature verification
    const body = await request.text();
    const signature = request.headers.get('x-papercups-signature') || '';
    
    // Verify signature if token is provided
    if (config.token && !verifySignature()) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const payload: PapercupsWebhookPayload = JSON.parse(body);
    
    console.log('Papercups webhook received:', {
      type: payload.type,
      data: payload.data,
      timestamp: new Date().toISOString(),
    });

    // Handle different webhook event types
    switch (payload.type) {
      case 'message.created':
        await handleMessageCreated(payload.data);
        break;
      case 'conversation.updated':
        await handleConversationUpdated(payload.data);
        break;
      case 'customer.created':
        await handleCustomerCreated(payload.data);
        break;
      default:
        console.log('Unhandled Papercups webhook type:', payload.type);
    }

    return NextResponse.json(
      { message: 'Webhook processed successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Papercups webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Handle message created event
 */
async function handleMessageCreated(data: PapercupsWebhookPayload['data']) {
  console.log('Message created:', {
    id: data.id,
    body: data.body,
    customerId: data.customer_id,
    conversationId: data.conversation_id,
    createdAt: data.created_at,
  });

  // TODO: Implement your business logic here
  // Examples:
  // - Save message to database
  // - Trigger notifications
  // - Update analytics
  // - Forward to internal systems
}

/**
 * Handle conversation updated event
 */
async function handleConversationUpdated(data: PapercupsWebhookPayload['data']) {
  console.log('Conversation updated:', {
    id: data.id,
    conversationId: data.conversation_id,
    updatedAt: data.created_at,
  });

  // TODO: Implement your business logic here
  // Examples:
  // - Update conversation status
  // - Trigger follow-up actions
  // - Update customer records
}

/**
 * Handle customer created event
 */
async function handleCustomerCreated(data: PapercupsWebhookPayload['data']) {
  console.log('Customer created:', {
    id: data.id,
    customerId: data.customer_id,
    createdAt: data.created_at,
    metadata: data.metadata,
  });

  // TODO: Implement your business logic here
  // Examples:
  // - Create customer record in your system
  // - Sync customer data
  // - Set up customer-specific configurations
}

