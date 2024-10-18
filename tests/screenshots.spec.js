import { test, expect } from '@playwright/test';

test('has title', async ({ page,context }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page).toHaveScreenshot("playwright_screenshot1.png",{fullPage:true});

 
  const handle =await page.$('xpath=//*[contains(@aria-label,"stargazers on GitHub")]');  
  console.log("handle=" + handle);
 
  if(handle ) { 
    const pagePromise = context.waitForEvent('page');
    await handle.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await expect.soft(newPage).toHaveScreenshot("playwright_screenshot2.png",{fullPage:true});
    //await expect(newPage).toHaveTitle(/Stargazers/);

    await newPage.close();
  }

    await page.close();
    await context.close();
});

test('qqqq', async ({ page }) => {
  await page.goto('https://www.google.co.jp/');

  // Click the get started link.
  await expect.soft(page).toHaveScreenshot("google_screenshot1.png",{fullPage:true});

  // Expects page to have a heading with the name of Installation.

}
);