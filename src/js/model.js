// import { API_URL, START_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";
import { API_URL_SINGLE } from "./config.js";

export const state = {
  characters: [],
  info: {},
  singleCharacter: {},
};

export const loadCharacters = async function (url) {
  try {
    const data = await getJSON(url);
    console.log(data);
    state.characters = data.results;
    state.info.pagesNum = data.info.pages;
    state.info.prevPage = data.info.prev;
    state.info.nextPage = data.info.next;
  } catch (err) {
    throw err;
  }
};

export const loadSingleCharacter = async function (char) {
  try {
    const data = await getJSON(API_URL_SINGLE + char);

    state.singleCharacter = data;
  } catch (err) {
    throw err;
  }
};
