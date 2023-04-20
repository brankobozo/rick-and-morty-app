import View from "./View.js";

class PaginationView extends View {
  _containerEl = document.querySelector(".pagination__list");

  addHandlerClick(handler) {
    this._containerEl.addEventListener("click", function (e) {
      // e.preventDefault();
      const btn = e.target.closest(".pagination__link");

      if (!btn) return;

      const goTo = btn.dataset.goto;

      handler(goTo);
    });
  }

  _generateMarkup() {
    const info = this._data.info;
    const currentPage = info.nextPage
      ? info.nextPage.slice(48) - 1
      : info.pagesNum;

    if (!info.prevPage) {
      return `
      <li class="pagination__item pagination__link pagination__link--prev disabled" data-goto="prevPage">
        <a href="#">&lt; Prev</a>
      </li>
      <li class="pagination__item"><p>${currentPage} / ${info.pagesNum}</p></li>
      <li class="pagination__item pagination__link pagination__link--next"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
    }

    if (!info.nextPage) {
      return `
      <li class="pagination__item pagination__link pagination__link--prev" data-goto="prevPage">
        <a href="#">&lt; Prev</a>
      </li>
      <li class="pagination__item"><p>${currentPage} / ${info.pagesNum}</p></li>
      <li class="pagination__item pagination__link pagination__link--next disabled"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
    }

    return `
      <li class="pagination__item pagination__link pagination__link--prev" data-goto="prevPage">
        <a href="#">&lt; Prev</a>
      </li>
      <li class="pagination__item"><p>${currentPage} / ${info.pagesNum}</p></li>
      <li class="pagination__item pagination__link pagination__link--next"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
  }
}
export const paginationView = new PaginationView();
