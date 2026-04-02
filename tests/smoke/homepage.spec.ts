import { expect, test } from '@playwright/test';

test.describe('Smoke', () => {
  test('homepage loads @chromium @firefox @webkit', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example/);
  });
});
