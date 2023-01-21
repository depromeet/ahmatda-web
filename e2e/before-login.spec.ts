import { expect, test } from '@playwright/test';

test.describe('localStorage에 저장된 토큰이 없다면', () => {
  test('onboard로 이동해야 한다.', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.goto('http://localhost:3000/onboard/step1');
    await page.locator('label').filter({ hasText: '운동' }).click();
    await page.getByRole('button', { name: '다음' }).click();

    expect(page.getByRole('heading')).toBeDefined();
    expect(page.getByRole('heading').innerHTML()).toContain('운동');
  });
});
