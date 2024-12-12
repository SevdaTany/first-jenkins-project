// const {test} = require('@playwright/test');

import { test } from '@playwright/test';


test ( "Simple Google Search test @google", async ({page}) => {

    await page.goto("https://www.google.com/")

} );

test ( "Simple Google Search test @youtube", async ({page}) => {

    await page.goto("https://www.youtube.com/")

} );



