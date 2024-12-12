import { test } from '@playwright/test';

test.describe("Test Group", () => {

    // create beforeEach.
test.beforeEach(async ({ page }) => {
  console.log('BeforeEach function is executed.');
      await page.goto('https://practice.cydeo.com');

});

  // create afterEach.
  test.afterEach(async ({ page }) => {
  console.log('AfterEach function is executed.');
      await page.waitForTimeout(3000); // wait for 3 seconds before proceeding with the next test case.

  });


  test('Test A', async ({ page }) => {
    console.log("Test A is expected");
    
  });

  test('Test B', async ({ page }) => {
    console.log("Test B is expected");

  });

  test('Test C', async ({ page }) => {
    console.log("Test C is expected");

  });


});

