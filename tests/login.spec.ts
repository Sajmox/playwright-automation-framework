// tests/login.spec.ts
import { test, expect } from '../src/fixtures/fixtures';

test('should login successfully', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL('/dashboard');
});
