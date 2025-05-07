import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { SearchPage } from '../../pages/search.page';
import config from '../../../config/dev.json';

test.describe('Search Tests', () => {
  let loginPage: LoginPage;
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    searchPage = new SearchPage(page);
    await loginPage.goto();
    await loginPage.login(config.credentials.username, config.credentials.password);
    await searchPage.navigateToPim();
  });

  test('TC_SCH_001: Search with valid employee name @regression', async () => {
    await searchPage.search('John Doe');
    const count = await searchPage.getResultCount();
    await expect(count).toBeGreaterThan(0);
  });

  test('TC_SCH_003: Search with non-existent employee name', async () => {
    await searchPage.search('NonExistentUser');
    const message = await searchPage.getNoResultsMessage();
    await expect(message).toContain('No Records Found');
  });
});
