import { test, expect } from "../fixture";
import { Header } from "../pages/components/header";
import { Home } from "../pages/home";
import {testData} from "../testData/testData";

test.use({ storageState: "auth.json" });

test("Check title", async ({ page }) => {
  const header = new Header(page);
  await page.goto("/");
  await header.checkLoaded();
});

test("Select first Group and verify user list", async ({ page }) => {
  const home = new Home(page);
  await home.open();
  // await home.spinner.waitForSpinnerComplete();
  await home.selectGroup(0);
  await expect(home.user).toBeVisible();
});

test("Search Group", async ({ app: { home }}) => {
  const expectUserList = testData.UserListForWWW;
  await home.open();
  await home.groupList.selectGroupBySearch("www");
  const result = await home.groupList.getUserData();
  expect(result).toEqual(expectUserList);
});

test("Create new empty Group", async ({ app: { home }}) => {
    await home.open();
    await home.groupList.createGroup("test group ToDelete");
    await home.groupList.search('test group ToDelete');
    expect(await home.groupList.rows.count()).toBe(1);
    
  });

  test("Delete new Group", async ({ app: { home }}) => {
    await home.open();
    await home.groupList.deleteGroup("test group ToDelete");
    await home.groupList.search('test group ToDelete');
    expect(await home.groupList.rows.count()).toBe(0);
    
  });
