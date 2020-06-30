import { SET_JSON, SET_ANSWER, SET_DIRECCIONES } from "./actionTypes";

export const initialState = {
  formularios: [],
  qtyFormularios: 0,
};

export const reducer = (state, action) => {
  const formularios = state.formularios;
  let index, payload, indexPregunta, indexRespuesta, idRespuesta, respuesta;
  switch (action.type) {
    case SET_JSON:
      return {
        ...state,
        formularios: action.payload,
        qtyFormularios: action.payload.length,
      };
    case SET_ANSWER:
      index = formularios.findIndex((v) => v.id === action.id);
      payload = action.payload.split("-");
      indexPregunta = payload[0];
      indexRespuesta = payload[1];
      idRespuesta = payload[2];
      respuesta = payload[3];

      formularios[index].preguntas.preguntas[indexPregunta][
        "idrespuesta"
      ] = idRespuesta;

      formularios[index].preguntas.preguntas[indexPregunta][
        "respuesta"
      ] = respuesta;

      formularios[index].preguntas.preguntas[indexPregunta].respuestas.forEach(
        (respuesta) => {
          respuesta.valid = false;
        }
      );

      formularios[index].preguntas.preguntas[indexPregunta].respuestas[
        indexRespuesta
      ].valid = true;

      return { ...state, formularios: formularios };
    case SET_DIRECCIONES:
      index = formularios.findIndex((v) => v.id === action.id);
      payload = action.payload.val;
      indexPregunta = action.payload.indexPregunta;
      respuesta = action.payload.val;

      formularios[index].preguntas.preguntas[
        indexPregunta
      ].respuestas[0].texto = respuesta;

      return { ...state, formularios: formularios };
    default:
      return state;
  }
};
