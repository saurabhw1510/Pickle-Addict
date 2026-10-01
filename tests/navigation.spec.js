import { test, expect } from "@playwright/test";

test("four top-level sections with active parent and logo home link", async ({
  page,
}) => {
  await page.goto("/events/atp");
  const navigation = page.getByRole("navigation", {
    name: "Main navigation",
    exact: true,
  });
  await expect(navigation.getByRole("link")).toHaveText([
    "Events",
    "Coaching",
    "Partners",
    "About",
  ]);
  await expect(
    navigation.getByRole("link", { name: "Events", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await page
    .locator("header")
    .getByRole("link", { name: "Pickle Addict home" })
    .click();
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
    "AFTER HOURS. ON COURT.",
  );
});

test("legacy links preserve filters and route to the right parent", async ({
  page,
}) => {
  for (const [oldPath, newPath] of [
    ["/atp", "/events/atp"],
    ["/stories", "/about/stories"],
    ["/vault?category=Community", "/about/vault?category=Community"],
  ]) {
    await page.goto(oldPath);
    await expect(page).toHaveURL(newPath);
  }
  await expect(
    page.getByRole("button", { name: "Community", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("event photos and community memories are reachable within their sections", async ({
  page,
}) => {
  await page.goto("/events");
  await page
    .getByRole("link", { name: "Explore the Nights", exact: true })
    .click();
  await expect(page).toHaveURL("/events/nights");
  await page
    .getByRole("link", { name: "Explore Event Photos", exact: true })
    .click();
  await expect(page).toHaveURL("/events/photos");
  await expect(page.locator("main figure")).toHaveCount(2);
  await page.goto("/about");
  await page.getByRole("link", { name: "Open the Vault", exact: true }).click();
  await expect(page).toHaveURL("/about/vault");
});

for (const width of [360, 390]) {
  test(`mobile homepage stays compact at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const height = await page.evaluate(
      () => document.documentElement.scrollHeight,
    );
    expect(height).toBeLessThan(1900);
    console.log(`Mobile homepage at ${width}px: ${height}px tall`);
    const primaryAction = page
      .locator(".hero-buttons")
      .getByRole("link", { name: "Explore the Nights" });
    const actionBox = await primaryAction.boundingBox();
    expect(actionBox.y + actionBox.height).toBeLessThan(844);
    await expect(
      page.getByText("PICKLEADDICT / AFTER HOURS", { exact: true }),
    ).toBeVisible();
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(menu.getByRole("link")).toHaveCount(5);
    await menu.getByRole("link", { name: "Events", exact: false }).click();
    await expect(page).toHaveURL("/events");
    await page
      .getByRole("navigation", { name: "Events navigation", exact: true })
      .getByRole("link", { name: "ATP Events", exact: true })
      .click();
    await expect(page).toHaveURL("/events/atp");
  });
}
