import { SET_JSON, SET_ANSWER, SET_COMMENT } from "./actionTypes";

export const setJson = payload => ({
  payload,
  type: SET_JSON
});

export const setAnswer = (id, payload) => ({
  id,
  payload,
  type: SET_ANSWER
});

export const setComment = (payload, event) => ({
  payload,
  event,
  type: SET_COMMENT
});
