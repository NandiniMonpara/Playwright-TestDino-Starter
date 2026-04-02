import { expect, test } from '@playwright/test';

test.describe('Regression', () => {
  test('example page shows expected heading @android @ios', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  });
});
