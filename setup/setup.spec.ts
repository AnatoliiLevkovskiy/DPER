import { test, expect } from "../fixture";

test("Get auth cookies", async ({ app: { login, home }, context }) => {
  const userName = process.env.ADMIN_USERNAME ?? '';
  const userPassword = process.env.ADMIN_PASSWORD??'';
  await login.open();
  await login.login(userName, userPassword);
  await context.storageState({ path: "auth.json" });
  await expect(home.header.title).toBeVisible();
});
