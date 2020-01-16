import {
  SET_JSON,
  SET_ANSWER
  // SET_COMMENT,
} from "./actionTypes";

export const initialState = {
  formularios: [],
  qtyFormularios: 0,
};

export const reducer = (state, action) => {
  const formularios = state.formularios;
  switch (action.type) {
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
    default:
      return state;
  }
};
