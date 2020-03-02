import { SET_JSON, SET_ANSWER, SET_DIRECCIONES } from "./actionTypes";

export const initialState = {
  formularios: [],
  qtyFormularios: 0
};

export const reducer = (state, action) => {
  const formularios = state.formularios;
  let index, payload, indexPregunta, idRespuesta, respuesta;
  switch (action.type) {
    case SET_JSON:
      return {
        ...state,
        formularios: action.payload,
        qtyFormularios: action.payload.length
      };
    case SET_ANSWER:
      index = formularios.findIndex(v => v.id === action.id);
      payload = action.payload.split("-");
      indexPregunta = payload[0];
      idRespuesta = payload[1];
      respuesta = payload[2];

      formularios[index].preguntas[indexPregunta]["idrespuesta"] = idRespuesta;
      formularios[index].preguntas[indexPregunta]["respuesta"] = respuesta;

      return { ...state, formularios: formularios };
    case SET_DIRECCIONES:
      index = formularios.findIndex(v => v.id === action.id);
      payload = action.payload.val;
      indexPregunta = action.payload.indexPregunta;
      respuesta = action.payload.val;

      formularios[index].preguntas[
        indexPregunta
      ].respuestas[0].texto = respuesta;

      return { ...state, formularios: formularios };
    default:
      return state;
  }
};
