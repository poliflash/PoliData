import {
  SET_JSON,
  SET_ANSWER,
  SET_COMMENT,
  SUBMIT_FORM,
  SET_IS_OPEN_DIALOG
} from "./actionTypes";

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

export const submitForm = id => ({
  id: id,
  type: SUBMIT_FORM
});

export const setIsOpenDialog = payload => ({
  payload,
  type: SET_IS_OPEN_DIALOG
});
