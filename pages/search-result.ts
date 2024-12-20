import { Locator, Page } from "@playwright/test";
import { BasePage } from "./abstract-page";

export class SearchResult extends BasePage {
  readonly root: Locator;
  constructor(readonly page: Page) {
    super(page);
    this.root = this.page.locator(".root");
  }
}
