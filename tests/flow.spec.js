import { test, expect } from "@playwright/test";

test("coaching and partnership enquiries retain their intent", async ({
  page,
}) => {
  for (const [route, label, subject] of [
    ["/coaching", "Book a Session", "Book a coaching session"],
    ["/partners", "Partner With Pickle Addict", "Partnership enquiry"],
    ["/atp", "Ask About ATP", "ATP enquiry"],
  ]) {
    await page.goto(route);
    await page.getByRole("link", { name: label, exact: true }).click();
    await expect(page.locator("#subject")).toHaveValue(subject);
  }
});

test("vault categories filter photos and handle unpublished collections", async ({
  page,
}) => {
  await page.goto("/vault");
  await expect(page.locator("main figure")).toHaveCount(4);
  await page.getByRole("button", { name: "Community", exact: true }).click();
  await expect(page.locator("main figure")).toHaveCount(1);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Community", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "ATP moments", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "ATP moments are coming soon." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator("main figure")).toHaveCount(4);
});

test("stories categories and mobile section navigation work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/stories");
  await page
    .getByRole("button", { name: "Player stories", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Player stories", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Events" })
    .click();
  await expect(page).toHaveURL("/events");
  await page
    .getByRole("navigation", { name: "Event sections" })
    .getByRole("link", { name: "Results & champions" })
    .click();
  await expect(page).toHaveURL("/events#results");
});
