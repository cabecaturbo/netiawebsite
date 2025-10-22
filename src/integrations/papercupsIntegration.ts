import type { PapercupsConfig, PapercupsUser, PapercupsMessage } from '@/src/config/integrations/papercups';

declare global {
  interface Window {
    Papercups?: {
      init: (config: { accountId: string; inboxId: string; token?: string }) => void;
      widget: {
        open: () => void;
        close: () => void;
        toggle: () => void;
        isOpen: () => boolean;
        identify: (user: PapercupsUser) => void;
        sendMessage: (message: PapercupsMessage) => void;
        onMessage: (callback: (message: PapercupsMessage) => void) => void;
        shutdown: () => void;
      };
    };
  }
}

export class PapercupsClient {
  private config: PapercupsConfig;
  private isInitialized = false;

  constructor(config: PapercupsConfig) {
    this.config = config;
  }

  /**
   * Initialize the Papercups widget
   */
  init(): void {
    if (typeof window === 'undefined' || this.isInitialized || !this.config.enabled) {
      return;
    }

    if (!this.config.accountId) {
      console.warn('Papercups: Account ID is required but not provided');
      return;
    }

    try {
      // Load Papercups script if not already loaded
      this.loadScript();
      this.isInitialized = true;
    } catch (error) {
      console.error('Papercups: Failed to initialize', error);
    }
  }

  /**
   * Identify a user to Papercups
   */
  identifyUser(user: PapercupsUser): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.identify(user);
    } catch (error) {
      console.error('Papercups: Failed to identify user', error);
    }
  }

  /**
   * Send a message to Papercups
   */
  async sendMessage(message: PapercupsMessage): Promise<void> {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.sendMessage(message);
    } catch (error) {
      console.error('Papercups: Failed to send message', error);
    }
  }

  /**
   * Set up message listener
   */
  onMessage(callback: (message: PapercupsMessage) => void): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.onMessage(callback);
    } catch (error) {
      console.error('Papercups: Failed to set up message listener', error);
    }
  }

  /**
   * Open the chat widget
   */
  open(): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.open();
    } catch (error) {
      console.error('Papercups: Failed to open widget', error);
    }
  }

  /**
   * Close the chat widget
   */
  close(): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.close();
    } catch (error) {
      console.error('Papercups: Failed to close widget', error);
    }
  }

  /**
   * Shutdown the Papercups widget
   */
  shutdown(): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    try {
      window.Papercups?.widget.shutdown();
      this.isInitialized = false;
    } catch (error) {
      console.error('Papercups: Failed to shutdown widget', error);
    }
  }

  /**
   * Load the Papercups script dynamically
   */
  private loadScript(): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Check if script is already loaded
    if (document.querySelector('script[src*="papercups"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = `${this.config.host}/widget.js`;
    script.async = true;
    script.onload = () => {
      // Initialize Papercups with configuration
      if (window.Papercups && typeof window.Papercups.init === 'function' && this.config.accountId && this.config.inboxId) {
        window.Papercups.init({
          accountId: this.config.accountId,
          inboxId: this.config.inboxId,
          ...(this.config.token && { token: this.config.token }),
        });
      }
    };
    script.onerror = () => {
      console.error('Papercups: Failed to load script');
    };

    document.head.appendChild(script);
  }
}

/**
 * Initialize Papercups with the given configuration
 * @param config Papercups configuration
 * @returns PapercupsClient instance or null if disabled
 */
export function initPapercups(config: PapercupsConfig): PapercupsClient | null {
  if (!config.enabled) {
    return null;
  }

  const client = new PapercupsClient(config);
  client.init();
  return client;
}

