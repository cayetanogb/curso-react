// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST = "http://localhost:5173";

test("app shows random fact ans image", async ({ page }) => {
  await page.goto(LOCALHOST);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith("https://cataas.com/cat")).toBeTruthy();
});
