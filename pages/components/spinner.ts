import { expect } from "@playwright/test";
import { BasePage } from "../abstract-page";

export class Spinner extends BasePage {
  readonly homeSpinner = this.page.getByRole("status");

  async waitForSpinnerComplete() {
    // await expect(this.homeSpinner).toBeVisible({ timeout: 20000 });
    await this.homeSpinner.waitFor({ state: 'attached', timeout: 20000 });
    await expect(this.homeSpinner).toBeHidden({ timeout: 20000 });
  }
}
