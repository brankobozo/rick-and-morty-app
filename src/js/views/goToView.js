import View from "./View.js";

class GoToView extends View {
  _containerEl = document.querySelector(".pagination__go");
  _btn = this._containerEl.querySelector(".btn--pagination");

  addHandlerClick(handler) {
    let page = this._containerEl.querySelector("#pagination__num");

    this._btn.addEventListener("click", function (e) {
      e.preventDefault();
      const pageGoTo = page.value;

      if (!pageGoTo) return;
      if (pageGoTo < 1 || pageGoTo > 42) {
        alert("Number of page must be between 1 and 42");
        return;
      }

      handler(pageGoTo);
    });
  }
}
export const goToView = new GoToView();
