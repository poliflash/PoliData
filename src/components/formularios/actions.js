import {
  SET_JSON_FORM,
  SET_ANSWER,
  SET_COMMENT,
  SUBMIT_FORM,
  SET_IS_OPEN_DIALOG
} from "./actionTypes";

export const setJsonForm = payload => ({
  payload,
  type: SET_JSON_FORM
});

export const setAnswer = payload => ({
  payload,
  type: SET_ANSWER
});

export const setComment = (payload, event) => ({
  payload,
  event,
  type: SET_COMMENT
});

export const submitForm = () => ({
  type: SUBMIT_FORM
});

export const setIsOpenDialog = payload => ({
  payload,
  type: SET_IS_OPEN_DIALOG
});
