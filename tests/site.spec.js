import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/events",
  "/events/nights",
  "/events/atp",
  "/events/photos",
  "/coaching",
  "/partners",
  "/about/vault",
  "/about",
  "/about/stories",
  "/contact",
];

for (const width of [360, 390, 768, 1440, 1920]) {
  test(`all routes fit at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      for (const photo of await page.locator("main img").all()) {
        await photo.scrollIntoViewIfNeeded();
        await expect(photo).toHaveJSProperty("complete", true);
        expect(
          await photo.evaluate((image) => image.naturalWidth),
        ).toBeGreaterThan(0);
      }
    }
    expect(errors).toEqual([]);
  });
}

test("desktop navigation, form validation, and local success", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page).toHaveURL("/about");
  await expect(page.locator("h1")).toContainText("MORE THAN");
  await page
    .locator("header")
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(page).toHaveURL("/contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator("#name")).toBeFocused();
  await expect(page.getByRole("status")).toHaveCount(0);
  await page.getByLabel("Your name").fill("Alex Test");
  await page.getByLabel("Email address").fill("invalid");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.locator("#email")).toBeFocused();
  await page.getByLabel("Email address").fill("alex@example.com");
  await page.getByLabel("What’s on your mind?").selectOption("My first game");
  await page
    .getByLabel("Your message")
    .fill("I would love to try a beginner session.");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("status")).toContainText("doesn’t send or store");
  await expect(page.getByRole("status")).toBeFocused();
  await page.getByRole("button", { name: "Write Another Message" }).click();
  await expect(page.getByLabel("Your name")).toHaveValue("");
});

test("mobile menu keyboard and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "About" })
    .click();
  await expect(page).toHaveURL("/about");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toHaveCount(0);
});

test("reduced motion and accessibility", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of routes) {
    await page.goto(route);
    for (
      let position = 0;
      position < (await page.evaluate(() => document.body.scrollHeight));
      position += 600
    ) {
      await page.evaluate((scroll) => window.scrollTo(0, scroll), position);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    expect(
      (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze())
        .violations,
    ).toEqual([]);
    await page.screenshot({
      path: `test-results/${route === "/" ? "home" : route.slice(1)}-review.png`,
      fullPage: true,
    });
  }
  await page.goto("/");
  await expect(page.locator(".stat").first()).toContainText("500+");
  expect(
    await page
      .locator(".hero-photo img")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );
  });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
});
