import { BasePage } from "./abstract-page";

export class Login extends BasePage {
  readonly emailField = this.page.locator('input[name="loginfmt"]');
  readonly nextButton = this.page.getByRole("button", { name: "Next" });
  readonly passwordField = this.page.getByPlaceholder("Password");
  readonly signInButton = this.page.getByRole("button", { name: "Sign in" });
  readonly checkbox = this.page.getByRole("checkbox");
  readonly yesButton = this.page.getByRole("button", { name: "Yes" });

  async login(email: string, password: string) {
    await this.emailField.fill(email);
    await this.nextButton.click();
    await this.passwordField.fill(password);
    await this.signInButton.click();
    await this.checkbox.check();
    await this.yesButton.click();
  }
  async open(){
    await this.page.goto("/");
  }
}
