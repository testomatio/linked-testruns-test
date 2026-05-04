import { test, expect } from '@playwright/test';

test.describe('Only Unlinked Tests', () => {
  test('no link test A', () => {
    expect(true).toBe(true);
  });

  test('no link test B', () => {
    expect(1 + 1).toBe(2);
  });
});
