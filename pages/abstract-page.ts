import { Page } from "@playwright/test";

export abstract class BasePage {
//   readonly page: Page;
//   constructor(page: Page) {
//     this.page = page;
//   }

// Or just like this
constructor(protected page: Page){}
}
