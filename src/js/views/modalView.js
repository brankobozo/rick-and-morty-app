import View from "./View.js";

class ModalView extends View {
  _containerEl = document.querySelector(".modal");
  _modalTargetContainer = document.querySelector(".cards__container");
  _overlay = document.querySelector(".overlay");

  addHandlerClick(handler) {
    const modal = this._containerEl;
    const overlay = this._overlay;

    this._modalTargetContainer.addEventListener("click", function (e) {
      const modalTarget = e.target.closest(".card");
      if (!modalTarget) return;

      handler(modalTarget.dataset.id);

      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    overlay.addEventListener("click", function (e) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  }

  _generateMarkup() {
    const char = this._data.singleCharacter;
    return `
      <div class="modal__inner">

        <div class="modal__heading">
          <img src="${char.image}" alt="${char.name}" />
        </div>

        <div class="modal__content">
          <div class="modal__section">
            <h3 class="modal__name">${char.name}</h3>
            <p class="modal__status">
            <span class="modal__status-icon ${char.status.toLowerCase()}"></span>
            ${char.status !== "unknown" ? char.status : "Status unknown"}
           </p>
          </div>

          <div class="modal__section">
            <span class="modal__subtitle">Species </span> 
            <p>${char.species}</p>
          </div>

          <div class="modal__section">
            <span class="modal__subtitle">Gender:</span>
            <p>${char.gender}</p>
          </div>

          <div class="modal__section">
            <span class="modal__subtitle">Last know Location:</span>
            <p>
              ${char.location.name}
            </p>
          </div>

          <div class="modal__section">
            <span class="modal__subtitle">First seen in:</span>
            <p>
              Episode ${char.episode[0].slice(40)}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

export const modalView = new ModalView();
