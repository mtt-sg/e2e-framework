import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [
    ['html', { outputFolder: 'reports/html-report' }],
    ['allure-playwright'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 12'] },
    },
  ],
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
});
