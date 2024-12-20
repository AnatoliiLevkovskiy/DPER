import { BasePage } from "../abstract-page";

export class GroupList extends BasePage {
  readonly searchField = this.page.getByRole("searchbox");
  readonly rows = this.page.locator("ul .list-group-item");
  readonly emptyResults = this.page.getByText("Please select a group to view its users.");
  readonly groupList = this.page.locator(".Group-List-Sidebar");
  readonly addButton = this.page.getByRole("button", { name: "Add Group" });
  readonly groupNameField = this.page.getByPlaceholder("Enter group name");
  readonly saveButton = this.page.getByRole("button", { name: "Save changes" });
  readonly deleteIcon = this.rows.nth(0).getByRole("button").nth(1);
  readonly deleteButton = this.page.locator(".modal-dialog").getByRole("button", { name: "delete" });

  readonly userList = this.page.locator(".card-body .col-md-12");

  async search(q: string) {
    await this.searchField.fill(q);
    await this.page.waitForTimeout(2000);
  }

  async selectGroupBySearch(name: string) {
    await this.search(name);
    await this.page.waitForTimeout(1000);
    await this.rows.nth(0).click();
    await this.page.waitForTimeout(2000);
  }

  async getUserData() {
    let titles = await this.userList.locator(".col-md-6 .card-title").allTextContents();
    const userCount = await this.userList.count();
    let allRowData: Record<string, string>[] = [];

    for (let i = 0; i < userCount; i++) {
      let rowData = {};
      rowData["name"] = titles[i];
      let userProperties = await this.userList.nth(i).locator(".card-text").allTextContents();
      rowData = userProperties.reduce((acc, elm) => {
        const key = elm.split(":")[0].trim();
        const value = elm.split(":")[1].trim();
        acc[key] = value;
        return acc;
      }, rowData);

      allRowData.push(rowData);
    }

    return allRowData;
  }

  async deleteGroup(name) {
    await this.search(name);
    await this.page.waitForTimeout(1000);
    if ((await this.rows.count()) > 0) {
      await this.deleteIcon.click();
      await this.deleteButton.click();
    }
  }

  async createGroup(name) {
    await this.search(name);
    await this.page.waitForTimeout(1000);
    if ((await this.rows.count()) == 0) {
      await this.addButton.click();
      await this.groupNameField.fill(name);
      await this.saveButton.click();
    }
  }
}
