export class SharedPaths {
  static get HOME_ROUTE() {
    return '/';
  }
  static get SNIPER_ROUTE() {
    return '/specimen/:name';
  }
  static get NOT_FOUND_ERROR_ROUTE() {
    return '/404';
  }
  static get UNEXPECTED_ERROR_ROUTE() {
    return '/500';
  }
}
