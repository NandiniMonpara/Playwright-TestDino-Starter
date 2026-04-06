import { expect, test } from '@playwright/test';

test.describe('Smoke', () => {
  test('homepage shows the main shopper entry points @chromium @firefox @webkit', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Demo Store/);
    await expect(page.getByRole('heading', { name: 'Demo E-commerce Testing Store' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Shop Now' }).first()).toHaveAttribute(
      'href',
      '/products',
    );
    await expect(page.getByRole('heading', { name: 'Audio & Camera' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'PC & Laptops' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Feature Product' })).toBeVisible();
  });
});
