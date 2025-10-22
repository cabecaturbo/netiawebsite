'use client'

import { useEffect } from 'react';
import { initPapercups } from '@/src/integrations/papercupsIntegration';
import { getPapercupsConfig } from '@/src/config/integrations/papercups';

/**
 * Bootstrap component for Papercups integration
 * Automatically initializes Papercups when mounted if enabled
 * Renders nothing - this is a side-effect only component
 */
export const PapercupsBootstrap = () => {
  useEffect(() => {
    const config = getPapercupsConfig();
    
    if (config.enabled) {
      console.log('Papercups: Initializing integration');
      initPapercups(config);
    }
  }, []);

  // This component renders nothing
  return null;
};

