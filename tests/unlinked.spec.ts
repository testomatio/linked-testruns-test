import { test, expect } from '@playwright/test';

test.describe('Unlinked Tests', () => {
  test('automated test WITHOUT link 1', () => {
    expect('hello').toContain('hell');
  });

  test('automated test WITHOUT link 2', () => {
    expect(200).toBeGreaterThan(100);
  });
});
