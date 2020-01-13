import isEmpty from "lodash/isEmpty";
import {
  SET_JSON,
  SET_ANSWER,
  // SET_COMMENT,
  SUBMIT_FORM,
  SET_IS_OPEN_DIALOG
} from "./actionTypes";

export const initialState = {
  formularios: [],
  qtyFormularios: 0,
  error: {},
  isOpenDialog: false,
  formCompleted: false,
  formSubmitted: false
};

export const reducer = (state, action) => {
  const formularios = state.formularios;
  switch (action.type) {
    case SET_IS_OPEN_DIALOG:
      return { ...state, isOpenDialog: action.payload, error: [] };
    case SET_JSON:
      return {
        ...state,
        formularios: action.payload,
        qtyFormularios: action.payload.length
      };
    case SET_ANSWER:
      const index = formularios.findIndex(v => v.id === action.id);
      const payload = action.payload.split("-");
      const indexPregunta = payload[0];
      const idRespuesta = payload[1];
      const respuesta = payload[2];

      formularios[index].preguntas[indexPregunta]["idrespuesta"] = idRespuesta;
      formularios[index].preguntas[indexPregunta]["respuesta"] = respuesta;

      return { ...state, formularios: formularios };
    // case SET_COMMENT:
    //   formulario[action.payload]["comentario"] = action.event;
    //   return { ...state, formulario: formulario };
    case SUBMIT_FORM:
      let errors = state.error;
      const id = action.id;
      const formularioIndex = formularios.findIndex(v => v.id === action.id);

      formularios[formularioIndex].preguntas.forEach(pregunta => {
        if (Number(pregunta.idrespuesta) === 0) {
          if (errors[id] && !errors[id].includes(pregunta.idpregunta)) {
            errors[id].push(pregunta.idpregunta);
          } else if (!errors[id]) {
            errors[id] = [pregunta.idpregunta];
          }
        } else {
          errors = {};
        }
      });

      if (!isEmpty(errors)) {
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
