export interface PapercupsConfig {
  enabled: boolean;
  accountId?: string;
  token?: string;
  inboxId?: string;
  host?: string;
}

export interface PapercupsUser {
  id?: string;
  name?: string;
  email?: string;
  metadata?: Record<string, unknown>;
}

export interface PapercupsMessage {
  text: string;
  metadata?: Record<string, unknown>;
}

/**
 * Get Papercups configuration from environment variables
 * @returns PapercupsConfig object with environment values and defaults
 */
export function getPapercupsConfig(): PapercupsConfig {
  const enabled = process.env.PAPERCUPS_ENABLED === 'true';
  
  return {
    enabled,
    accountId: process.env.PAPERCUPS_ACCOUNT_ID,
    token: process.env.PAPERCUPS_TOKEN,
    inboxId: process.env.PAPERCUPS_INBOX_ID,
    host: process.env.PAPERCUPS_HOST || 'https://app.papercups.io',
  };
}

