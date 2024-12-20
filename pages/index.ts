import { BasePage } from "./abstract-page";
import { GroupList } from "./components/group-list";
import { Header } from "./components/header";
import { Spinner } from "./components/spinner";
import { Home } from "./home";
import { Login } from "./login";
import { SearchResult } from "./search-result";

export class App extends BasePage {
  public readonly home = new Home(this.page);
  public readonly searchResult = new SearchResult(this.page);
  public readonly login = new Login(this.page);
  public readonly groupList = new GroupList(this.page)
  // getter
  public get header() {
    return new Header(this.page);
  }
  // lazy
  public spinner = () => {
    return new Spinner(this.page);
  };
}
