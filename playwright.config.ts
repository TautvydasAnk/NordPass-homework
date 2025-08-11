import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://nordpass.com/',
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'NordPass-homework',
      use: {
        channel: 'chrome',
        launchOptions: {
          args: ['--start-maximized'],
        },
        viewport: null,
      },
    },
  ],
});
