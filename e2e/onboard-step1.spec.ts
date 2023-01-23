import { expect, test } from '@playwright/test';

test('운동', async ({ page }) => {
  await page.goto('http://localhost:3000/onboard/step1');
  await page.getByText('운동').click();
  await page.getByRole('button', { name: '다음' }).click();
  const heading = await page.getByRole('heading');
  await expect(heading).toContainText('운동');
});
