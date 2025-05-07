import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('Verify public API response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    await expect(response.ok()).toBeTruthy();
    const data = await response.json();
    await expect(data.id).toBe(1);
  });
});
