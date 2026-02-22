const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы https://playwright.dev/', async({ page }) => {
    // Открываем страницу
    await page.goto('https://playwright.dev/');

    // Проверяем заголовок
    await expect(page).toHaveTitle(/Playwright/i);
});