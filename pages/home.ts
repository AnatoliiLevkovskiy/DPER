import { BasePage } from "./abstract-page.ts";
import { Header } from "./components/header.ts";
import { Spinner } from "./components/spinner.ts";
import { GroupList } from "./components/group-list.ts";

export class Home extends BasePage {
  readonly search = this.page.getByLabel("search");
  readonly rows = this.page.locator("ul .list-group-item span");
  readonly user = this.page.getByText("eCaseTestUser01", { exact: true });
  readonly spinner = new Spinner(this.page);
  readonly header = new Header(this.page);
  readonly groupList = new GroupList(this.page);

  async searchGroup(query: string) {
    await this.search.pressSequentially(query);
  }

  async selectGroup(rowNumber: number) {
    await this.rows.nth(rowNumber).click({ force: true });
  }

  async expectLoaded() {
    await this.spinner.waitForSpinnerComplete();
  }

  async open() {
    await this.page.goto("/");
    await this.page.waitForTimeout(2000);
  }
}
