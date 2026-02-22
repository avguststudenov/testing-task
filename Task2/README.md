Задание 2: автотест заголовка страницы с Playwright
Тест проверяет, что заголовок страницы https://playwright.dev/ соответствует ожидаемому значению.
Тест написан с использованием Playwright Test и запускается в браузерах Chromium и Firefox.

Структура: 
- "tests/title.spec.js" - файл с тестом
- "playwright.config.js" - конфигурация Playwright (браузеры, viewport-ы, headless)
- "package.json" - зависимости

Установка и запуск:
1) Установить зависимости:
   npm install
2) Установить браузеры:
   npm playwright install
3) Запуск теста в Chromium:
   npx playwright test --project=chromium
4) Запуск теста в FireFox
   npx playwright test --project=firefox
