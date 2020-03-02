import { SET_JSON, SET_ANSWER, SET_DIRECCIONES } from "./actionTypes";

export const setJson = payload => ({
  payload,
  type: SET_JSON
});

export const setAnswer = (id, payload) => ({
  id,
  payload,
  type: SET_ANSWER
});

export const setDirecciones = (id, payload) => ({
  id,
  payload,
  type: SET_DIRECCIONES
});
