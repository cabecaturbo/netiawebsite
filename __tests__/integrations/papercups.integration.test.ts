import { getPapercupsConfig } from '@/src/config/integrations/papercups';

// Mock environment variables
const originalEnv = process.env;

describe('Papercups Integration', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('getPapercupsConfig', () => {
    it('should return disabled config when PAPERCUPS_ENABLED is not set', () => {
      delete process.env.PAPERCUPS_ENABLED;
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(false);
      expect(config.accountId).toBeUndefined();
      expect(config.token).toBeUndefined();
      expect(config.inboxId).toBeUndefined();
      expect(config.host).toBe('https://app.papercups.io');
    });

    it('should return disabled config when PAPERCUPS_ENABLED is false', () => {
      process.env.PAPERCUPS_ENABLED = 'false';
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(false);
    });

    it('should return enabled config when PAPERCUPS_ENABLED is true', () => {
      process.env.PAPERCUPS_ENABLED = 'true';
      process.env.PAPERCUPS_ACCOUNT_ID = 'test-account-id';
      process.env.PAPERCUPS_TOKEN = 'test-token';
      process.env.PAPERCUPS_INBOX_ID = 'test-inbox-id';
      process.env.PAPERCUPS_HOST = 'https://custom.papercups.io';
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(true);
      expect(config.accountId).toBe('test-account-id');
      expect(config.token).toBe('test-token');
      expect(config.inboxId).toBe('test-inbox-id');
      expect(config.host).toBe('https://custom.papercups.io');
    });

    it('should use default host when PAPERCUPS_HOST is not set', () => {
      process.env.PAPERCUPS_ENABLED = 'true';
      delete process.env.PAPERCUPS_HOST;
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(true);
      expect(config.host).toBe('https://app.papercups.io');
    });

    it('should handle missing optional environment variables', () => {
      process.env.PAPERCUPS_ENABLED = 'true';
      process.env.PAPERCUPS_ACCOUNT_ID = 'test-account-id';
      delete process.env.PAPERCUPS_TOKEN;
      delete process.env.PAPERCUPS_INBOX_ID;
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(true);
      expect(config.accountId).toBe('test-account-id');
      expect(config.token).toBeUndefined();
      expect(config.inboxId).toBeUndefined();
    });
  });

  describe('Feature flag gating', () => {
    it('should respect PAPERCUPS_ENABLED flag', () => {
      process.env.PAPERCUPS_ENABLED = 'false';
      process.env.PAPERCUPS_ACCOUNT_ID = 'test-account-id';
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(false);
      // Even with account ID set, it should be disabled
      expect(config.accountId).toBe('test-account-id');
    });

    it('should be case sensitive for boolean values', () => {
      process.env.PAPERCUPS_ENABLED = 'TRUE'; // uppercase
      
      const config = getPapercupsConfig();
      
      expect(config.enabled).toBe(false); // Should be false because it's not exactly 'true'
    });
  });
});

