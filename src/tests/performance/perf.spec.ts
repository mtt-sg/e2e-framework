import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import config from '../../../config/dev.json';

test.describe('Performance Tests', () => {
  test('Measure login page load time', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.tracing.start({ screenshots: true, snapshots: true });
    const start = Date.now();
    await loginPage.goto();
    const loadTime = Date.now() - start;
    await page.tracing.stop({ path: 'reports/trace.zip' });
    await expect(loadTime).toBeLessThan(5000); // Adjust threshold as needed
  });
});
