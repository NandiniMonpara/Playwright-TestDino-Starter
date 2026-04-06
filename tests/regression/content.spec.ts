import { expect, test } from '@playwright/test';

test.describe('Regression', () => {
  test('products catalog lists the demo inventory @chromium @firefox @webkit', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Shop Now' }).first().click();

    await expect(page).toHaveURL(/\/products$/);
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
    await expect(page.getByText('Showing 14 products')).toBeVisible();
    await expect(page.getByRole('link', { name: /Rode NT1-A Condenser Mic/i }).first()).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Dell XPS 13 \(2021\) Laptop/i }).first(),
    ).toBeVisible();
  });
});
