import { test, expect } from '@playwright/test';

test.describe('Linked Tests', () => {
  test('automated test WITH link @T85e4b19f', () => {
    expect(true).toBe(true);
  });

  test('automated test WITH link 2 @T96bed6d0', () => {
    expect(1 + 1).toBe(2);
  });
});
