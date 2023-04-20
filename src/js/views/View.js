export default class View {
  _data;

  _clear() {
    this._containerEl.innerHTML = "";
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._containerEl.insertAdjacentHTML("beforeend", markup);
  }

  renderSpin() {
    const markup = `<div class="lds-hourglass"></div>`;
    this._clear();
    this._containerEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderErr() {}
}
