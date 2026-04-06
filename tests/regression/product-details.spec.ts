import { expect, test } from '@playwright/test';

test.describe('Product Details', () => {
  test('product detail page shows purchase actions and description @chromium @firefox @webkit', async ({
    page,
  }) => {
    await page.goto('/products');
    await page.getByRole('link', { name: /Rode NT1-A Condenser Mic/i }).first().click();

    await expect(page).toHaveURL(/\/product\/rode-nt1-a-condenser-mic$/);
    await expect(page).toHaveTitle(/Rode NT1-A Condenser Mic/);
    await expect(page.getByTestId('product-name')).toHaveText('Rode NT1-A Condenser Mic');
    await expect(
      page.getByText('Studio-grade condenser microphone with cardioid pattern for detailed sound capture.'),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'ADD TO CART' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'BUY NOW' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Description' })).toBeVisible();
  });
});
