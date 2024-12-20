import { test, expect } from "@playwright/test";
import { App } from "./pages";

const myTest = test.extend<{ app: App }>({
  app: ({ page }, use) => {
    use(new App(page));
  },
});

// 1
test.use({ storageState: "auth.json" });
test("Logged in User can open Group Manager App", async ({ page }) => {
  await page.goto("/");
  // Expect a title "to contain" a substring.
  await expect(page.getByText("Group Manager Lite")).toBeVisible();
});

//2
myTest("Open home page", async ({ app }) => {
  await app.home.open();
  // Expect a title "to contain" a substring.
  await expect(app.home.header.title).toBeVisible();
});

//3
myTest("Check title", async ({ app:{home} }) => {
  // Expect a title "to contain" a substring.
  await home.open();
  await expect(home.header.title).toBeVisible();
});