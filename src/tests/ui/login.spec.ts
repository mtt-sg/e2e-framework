import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import config from '../../../config/dev.json';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC_LGN_001: Successful login with valid credentials @regression', async ({ page }) => {
    await loginPage.login(config.credentials.username, config.credentials.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC_LGN_002: Login with invalid username', async () => {
    await loginPage.login('InvalidUser', config.credentials.password);
    const error = await loginPage.getErrorMessage();
    await expect(error).toContain('Invalid credentials');
  });

  test('TC_LGN_004: Login with empty username', async () => {
    await loginPage.login('', config.credentials.password);
    const error = await loginPage.getErrorMessage();
    await expect(error).toContain('Required');
  });
});
