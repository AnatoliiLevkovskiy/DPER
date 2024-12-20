import {test as base} from "@playwright/test";
import { App } from "./pages";

const test = base.extend<{ app: App }>({
    app: ({ page }, use) => {
      use(new App(page));
    },
  });

  export * from "@playwright/test";
export { test };