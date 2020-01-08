import React, { useEffect, useReducer } from "react";
import JsonForm from "./JsonForm";
import { useFetch } from "../hooks/useFetch";
import {
  setJsonForm,
  setAnswer,
  setComment,
  submitForm,
  setIsOpenDialog
} from "./actions";
import { initialState, reducer } from "./reducer";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formContainer: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Formulario = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const url =
    "https://f2020.azurewebsites.net/api/FaroFormularioBase?code=5mWvvpNVz/at91R4awZb7g/rSfVWeHbMSARrVFbEdZWtC2fWBaGtnQ==&id=conectividad";

  const { data, isLoading, isError } = useFetch(url);

  const setIsOpen = status => {
    dispatch(setIsOpenDialog(status));
  };

  const setFormAnswer = val => {
    dispatch(setAnswer(val));
  };

  const setCommentAnswer = index => e => {
    dispatch(setComment(index, e.target.value));
  };

  const onSubmit = () => {
    dispatch(submitForm());
  };

  useEffect(() => {
    !isLoading && data && dispatch(setJsonForm(data[0].preguntas));
  }, [data, isLoading]);

  return (
    <div className={classes.formContainer}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsOpen(true)}>
        Formulario
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={state.isOpenDialog}
        onClose={() => setIsOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Formulario</DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth component="fieldset">
            <JsonForm
              error={isError}
              isLoading={isLoading}
              formError={state.error}
              setFormAnswer={setFormAnswer}
              data={state.preguntas && state.preguntas}
              setCommentAnswer={setCommentAnswer}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Formulario;
