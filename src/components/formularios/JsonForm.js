import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
// import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const errorMessageStyles = makeStyles({
  styledWarning: props => ({
    color: "#f44336",
    display: props.visible ? "block" : "none"
  })
});

const jsonFormStyles = makeStyles({
  styledRadioContainer: {
    marginBottom: "10px"
  },
  styledRadioGroup: {
    flexDirection: "row !important"
  },
  styledTextField: {
    margin: "10px 0 20px !important"
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "65vh"
  }
});

const ErrorMessage = props => {
  const classes = errorMessageStyles(props);
  return (
    <div className={classes.styledWarning}>Debe seleccionar una opción</div>
  );
};

const JsonForm = ({
  data,
  error,
  setFormAnswer,
  // setCommentAnswer,
  formError
}) => {
  const classes = jsonFormStyles();

  const handleChange = event => {
    setFormAnswer(event.target.value);
  };

  return (
    <>
      {!error && data.length ? (
        data.map((pregunta, indexP) => (
          <div
            className={classes.styledRadioContainer}
            key={pregunta.idpregunta}>
            <FormLabel component="legend">{pregunta.pregunta}</FormLabel>
            <RadioGroup
              className={classes.styledRadioGroup}
              defaultValue={`${indexP}-${pregunta.idrespuesta}-${pregunta.respuesta}`}
              onChange={handleChange}>
              {pregunta.respuestas.length &&
                pregunta.respuestas.map(respuesta => (
                  <FormControlLabel
                    key={respuesta.idrespuesta}
                    value={`${indexP}-${respuesta.idrespuesta}-${respuesta.respuesta}`}
                    control={<Radio color="primary" />}
                    label={respuesta.respuesta}
                  />
                ))}
            </RadioGroup>
            <ErrorMessage visible={formError.includes(pregunta.idpregunta)} />
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
