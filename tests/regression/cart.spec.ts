import { expect, test } from '@playwright/test';

test.describe('Cart', () => {
  test('adding a product updates the cart count and confirmation state @chromium @firefox @webkit', async ({
    page,
  }) => {
    await page.goto('/products');
    await page.getByRole('link', { name: /Rode NT1-A Condenser Mic/i }).first().click();

    await expect(page.getByTestId('header-cart-count')).toHaveCount(0);
    await page.getByTestId('add-to-cart-button').click();

    await expect(page.getByTestId('header-cart-count')).toHaveText('1');
    await expect(page.getByText('Added to the cart')).toBeVisible();
    await expect(page.getByTestId('product-name')).toHaveText('Rode NT1-A Condenser Mic');
    await expect(page.getByTestId('product-price')).toHaveText('$240');
  });
});
