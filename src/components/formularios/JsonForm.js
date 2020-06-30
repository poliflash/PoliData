import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const errorMessageStyles = makeStyles({
  styledWarning: (visible) => ({
    color: "#f44336",
    display: visible ? "block" : "none",
  }),
});

const jsonFormStyles = makeStyles({
  styledRadioContainer: {
    marginBottom: "10px",
  },
  styledRadioGroup: {
    flexDirection: "row !important",
  },
  styledTextField: {
    margin: "10px 0 20px !important",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "65vh",
  },
});

const ErrorMessage = ({ visible }) => {
  const classes = errorMessageStyles(visible);
  return (
    <div className={classes.styledWarning}>Debe seleccionar una opción</div>
  );
};

const JsonForm = ({
  data,
  error,
  setFormAnswer,
  setInputDirecciones,
  idformulario,
  getIndexOfRes,
  formError,
  mailMessage,
  celularMessage,
}) => {
  const classes = jsonFormStyles();

  const handleInputDirecciones = (indexPregunta, idpregunta, respuesta) => (
    event
  ) => {
    setInputDirecciones(
      event.target.value,
      indexPregunta,
      idpregunta,
      respuesta
    );
  };

  const handleChange = (e) => {
    setFormAnswer(e.target.value);
  };

  return (
    <>
      {!error && data.preguntas.length ? (
        data.preguntas.map((pregunta, indexP) => (
          <div key={pregunta.idpregunta}>
            {idformulario === "DIRECCIONES" ? (
              <>
                {pregunta.respuestas.length &&
                  pregunta.respuestas.map((respuesta, indexR) => (
                    <Grid
                      key={respuesta.idrespuesta}
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                      spacing={1}
                      style={{ width: "100%" }}>
                      <Grid
                        style={{ width: "100%", marginBottom: "15px" }}
                        item
                        xs={12}
                        sm={6}
                        md={4}>
                        <TextField
                          style={{ width: "100%" }}
                          required
                          error={formError.includes(pregunta.idpregunta)}
                          helperText={
                            formError.includes(pregunta.idpregunta)
                              ? respuesta.respuesta === "Correo"
                                ? mailMessage === ""
                                  ? "Debe completar este campo"
                                  : mailMessage
                                : respuesta.respuesta === "Celular"
                                ? celularMessage === ""
                                  ? "Debe completar este campo"
                                  : celularMessage
                                : "Debe completar este campo"
                              : ""
                          }
                          label={respuesta.respuesta}
                          onChange={handleInputDirecciones(
                            indexP,
                            pregunta.idpregunta,
                            respuesta.respuesta
                          )}
                          value={respuesta.texto}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  ))}
              </>
            ) : (
              <div
                className={classes.styledRadioContainer}
                key={pregunta.idpregunta}>
                <FormLabel component="legend">{pregunta.pregunta}</FormLabel>
                <RadioGroup
                  className={classes.styledRadioGroup}
                  value={
                    pregunta.idrespuesta
                      ? `${indexP}-${getIndexOfRes(
                          indexP,
                          pregunta.idrespuesta
                        )}-${pregunta.idrespuesta}-${pregunta.respuesta}`
                      : ""
                  }
                  onChange={handleChange}>
                  {pregunta.respuestas.length &&
                    pregunta.respuestas.map((respuesta, indexR) => {
                      return (
                        <div key={respuesta.idrespuesta}>
                          <FormControlLabel
                            value={`${indexP}-${indexR}-${respuesta.idrespuesta}-${respuesta.respuesta}`}
                            control={<Radio color="primary" />}
                            label={respuesta.respuesta}
                          />
                        </div>
                      );
                    })}
                </RadioGroup>
                <ErrorMessage
                  visible={formError.includes(pregunta.idpregunta)}
                />
              </div>
            )}
            {/* <TextField
            className={classes.styledTextField}
            fullWidth
            label="Comentario"
            multiline
            rows="4"
            onChange={setCommentAnswer(indexP)}
            defaultValue={
              pregunta.idrespuesta !== 0 &&
              pregunta.comentario !== `Falta Pregunta ${indexP + 1}`
                ? pregunta.comentario
                : ""
            }
            variant="outlined"
          /> */}
          </div>
        ))
      ) : (
        <h2>Disculpe, ha ocurrido un error</h2>
      )}
    </>
  );
};

export default JsonForm;
