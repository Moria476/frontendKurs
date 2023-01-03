import SearchGithubUser from "./pages/searchGithubUser.js";

const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: SearchGithubUser },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
        })
        .resolve();
    });
  }
}
