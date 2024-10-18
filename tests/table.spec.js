import { test, expect } from '@playwright/test';

test('has title', async ({ page,context }) => {
  await page.goto('https://playwright.dev/');
  const innerText = await (
    await page.locator("body").innerText()
  ).valueOf();
  const myregex = new RegExp(/Playwright enables reliable end-to-end testing for modern web apps.\n/);
  const result = innerText.match(myregex);

  if(result != null) console.log(result[index]);

});
