import { Locator, Page, expect } from "@playwright/test";

export class Header {
  readonly title: Locator;
  constructor(readonly page: Page) {
    this.title = this.page.getByText("Group Manager Lite");
  }
  async checkLoaded(){
    await expect(this.title).toBeVisible()
  }

  async expectLoaded(){
    await expect(this.title).toBeVisible()
  }
}
