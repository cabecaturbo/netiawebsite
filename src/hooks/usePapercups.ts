'use client'

import { useCallback, useEffect, useMemo, useState } from 'react';
import { initPapercups, PapercupsClient } from '@/src/integrations/papercupsIntegration';
import { getPapercupsConfig } from '@/src/config/integrations/papercups';
import type { PapercupsUser, PapercupsMessage } from '@/src/config/integrations/papercups';

interface UsePapercupsReturn {
  enabled: boolean;
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (message: PapercupsMessage) => Promise<void>;
  identifyUser: (user: PapercupsUser) => void;
  isReady: boolean;
}

/**
 * React hook for Papercups integration
 * Provides React-friendly helpers for Papercups functionality
 */
export function usePapercups(): UsePapercupsReturn {
  const [client, setClient] = useState<PapercupsClient | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Get configuration
  const config = useMemo(() => getPapercupsConfig(), []);

  // Initialize client on mount
  useEffect(() => {
    if (config.enabled && typeof window !== 'undefined') {
      const papercupsClient = initPapercups(config);
      setClient(papercupsClient);
      setIsReady(true);
    }
  }, [config]);

  // Set up message listener to track widget state
  useEffect(() => {
    if (!client || typeof window === 'undefined') {
      return;
    }

    const handleMessage = (message: PapercupsMessage) => {
      // Handle incoming messages if needed
      console.log('Papercups message received:', message);
    };

    client.onMessage(handleMessage);

    // Check if widget is open periodically
    const checkWidgetState = () => {
      if (window.Papercups?.widget) {
        setIsOpen(window.Papercups.widget.isOpen());
      }
    };

    const interval = setInterval(checkWidgetState, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [client]);

  // Open chat widget
  const openChat = useCallback(() => {
    if (client) {
      client.open();
      setIsOpen(true);
    }
  }, [client]);

  // Close chat widget
  const closeChat = useCallback(() => {
    if (client) {
      client.close();
      setIsOpen(false);
    }
  }, [client]);

  // Send message
  const sendMessage = useCallback(async (message: PapercupsMessage) => {
    if (client) {
      await client.sendMessage(message);
    }
  }, [client]);

  // Identify user
  const identifyUser = useCallback((user: PapercupsUser) => {
    if (client) {
      client.identifyUser(user);
    }
  }, [client]);

  // Return no-ops if disabled
  if (!config.enabled) {
    return {
      enabled: false,
      isOpen: false,
      openChat: () => {},
      closeChat: () => {},
      sendMessage: async () => {},
      identifyUser: () => {},
      isReady: false,
    };
  }

  return {
    enabled: config.enabled,
    isOpen,
    openChat,
    closeChat,
    sendMessage,
    identifyUser,
    isReady,
  };
}

