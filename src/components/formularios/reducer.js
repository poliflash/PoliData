import {
  SET_JSON_FORM,
  SET_ANSWER,
  SET_COMMENT,
  SUBMIT_FORM,
  SET_IS_OPEN_DIALOG
} from "./actionTypes";

export const initialState = {
  preguntas: [],
  qtyPreguntas: 0,
  error: [],
  isOpenDialog: false,
  formCompleted: false,
  formSubmitted: false
};

export const reducer = (state, action) => {
  const preguntas = state.preguntas;
  switch (action.type) {
    case SET_IS_OPEN_DIALOG:
      return { ...state, isOpenDialog: action.payload, error: [] };
    case SET_JSON_FORM:
      return {
        ...state,
        preguntas: action.payload,
        qtyPreguntas: action.payload.length
      };
    case SET_ANSWER:
      const payload = action.payload.split("-");
      const indexPregunta = payload[0];
      const idRespuesta = payload[1];
      const respuesta = payload[2];

      preguntas[indexPregunta]["idrespuesta"] = idRespuesta;
      preguntas[indexPregunta]["respuesta"] = respuesta;

      return { ...state, preguntas: preguntas };
    case SET_COMMENT:
      preguntas[action.payload]["comentario"] = action.event;
      return { ...state, preguntas: preguntas };
    case SUBMIT_FORM:
      const errors = [];
      preguntas.forEach(pregunta => {
        if (Number(pregunta.idrespuesta) === 0)
          errors.push(pregunta.idpregunta);
      });

      if (errors.length) {
        return { ...state, error: errors };
      }

      return {
        ...state,
        error: errors,
        isOpenDialog: false,
        formCompleted: true
      };
    default:
      return state;
  }
};
