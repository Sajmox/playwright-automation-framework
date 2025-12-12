// src/fixtures/fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import type { Page } from '@playwright/test';

// Deklaracja typu dla custom fixture
type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('user', 'pass');
    await use(page);
  }
});

export { expect } from '@playwright/test';
