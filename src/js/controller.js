import * as model from "./model.js";
import { API_URL, API_URL_SINGLE } from "./config.js";
import { charactersView } from "./views/charactersView.js";
import { paginationView } from "./views/paginationView.js";
import { goToView } from "./views/goToView.js";
import { modalView } from "./views/modalView.js";

const controlCharacters = async function (url) {
  // render spiner
  charactersView.renderSpin();

  try {
    // get (load) chars
    await model.loadCharacters(url);

    // render characters
    charactersView.render(model.state);

    // render pagination
    paginationView.render(model.state);
  } catch (err) {
    // temp error handling - NEED RENDER
    console.log(err.message);
  }
};

const controlPagination = function (goTo) {
  const link = model.state.info[goTo];
  controlCharacters(link);
};
const controlGoTo = function (goTo) {
  const link = API_URL.slice(0, 48) + goTo;
  controlCharacters(link);
};

const controlSingleCharacter = async function (char) {
  try {
    // get single char
    await model.loadSingleCharacter(char);

    // render in modal
    modalView.render(model.state);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlCharacters();
  paginationView.addHandlerClick(controlPagination);
  goToView.addHandlerClick(controlGoTo);
  modalView.addHandlerClick(controlSingleCharacter);
};

document.querySelector(".btn--cta").addEventListener("click", function (e) {
  init();
  document.querySelector(".app").style.display = "block";
  document.querySelector(".hero").style.display = "none";
});
