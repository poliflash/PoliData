import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";

import { setAnswer, setDirecciones } from "./actions";
import JsonForm from "./JsonForm";

const Formulario = ({
  id,
  authMail,
  index,
  data,
  dataPersona,
  title,
  message,
  state,
  isError,
  idformulario,
  dispatch,
}) => {
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [mailAnswer, setMailAnswer] = useState([]);
  const [mailMessage, setMailMessage] = useState("");
  const [celularMessage, setCelularMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email);
  };

  const isValidCelular = (celular) => {
    const celularRegex = /^[0-9]*$/;
    return celularRegex.test(celular);
  };

  const setInputDirecciones = (val, indexPregunta, idpregunta, respuesta) => {
    if (!val) {
      setFormError([...formError, idpregunta]);
    } else {
      const newArrError =
        formError.indexOf(idpregunta) !== -1
          ? formError.filter((item) => item !== idpregunta)
          : formError;
      setFormError(newArrError);
    }

    setMailMessage("");
    setCelularMessage("");

    switch (respuesta) {
      case "Correo":
        if (!isValidEmail(val)) {
          setFormError([...formError, idpregunta]);
          setMailMessage("Formato de email no válido");
        }
        break;
      case "Celular":
        if (!isValidCelular(val)) {
          setFormError([...formError, idpregunta]);
          setCelularMessage("Sintaxis incorrecta");
        }
        break;
      default:
        break;
    }
    respuesta === "Correo" && setMailAnswer([val, idpregunta]);
    dispatch(setDirecciones(id, { val, indexPregunta }));
  };

  const setFormAnswer = (val) => {
    dispatch(setAnswer(id, val));
  };

  const convertRes = {
    Correo: "Correo",
    Celular: "TC",
    Twitter: "TW",
  };

  const getIndexOf = (respuesta) => {
    const res = convertRes[respuesta];
    let dir = null;
    dataPersona.direcciones.forEach((direccion) => {
      if (direccion.idrespuesta === res) {
        dir = direccion;
        return;
      }
    });
    return dir;
  };

  const getIndexOfRes = (indexP, res_id) => {
    if (res_id) {
      const res = data.preguntas[indexP].respuestas
        .map((respuesta) => {
          return respuesta.idrespuesta;
        })
        .indexOf(Number(res_id));

      return res;
    }

    return null;
  };

  const validateForm = () => {
    let errors = [];
    let mailRes = [];

    if (idformulario === "DIRECCIONES") {
      data.preguntas.forEach((pregunta, indexP) => {
        pregunta.respuestas.forEach((respuesta) => {
          if (respuesta.texto === "") {
            errors.push(pregunta.idpregunta);
            setFormError([...formError, ...errors]);
          }

          const respuestaok = respuesta.texto !== "" ? respuesta.texto : "";

          if (respuesta.respuesta === "Correo") {
            mailRes = respuestaok;
            setMailAnswer([respuestaok, pregunta.idpregunta]);
          }
        });
      });
    } else {
      setFormError(errors);
      mailRes = authMail;

      data.preguntas.forEach((pregunta) => {
        if (Number(pregunta.idrespuesta) === 0 || pregunta.idrespuesta === "") {
          errors.push(pregunta.idpregunta);
          setFormError(errors);
        }
      });
    }

    if (!errors.length && !formError.length) {
      setFormError([]);
      submitForm(mailRes);
    }
  };

  const submitForm = async (mailRes) => {
    const postUrl =
      "https://farodesarrollo2010.azurewebsites.net/api/FormularioPersonaPost?code=VtEH0pzl8ADUEHmaoT7NDikIh6WGOgZuYHc5pvLsDdeALF1iqLdKWg==";

    const url = "https://nodechatbotjson.azurewebsites.net/mailverify?mail=";

    setIsLoadingPost(true);

    try {
      const response = await fetch(url + mailRes);
      const data = await response.json();
      if (data.success) {
        try {
          const config = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(state.formularios[index]),
          };

          await fetch(postUrl, config);
          setFormError([]);
          setMailMessage("");
          setIsLoadingPost(false);
          setOpen(false);
        } catch (error) {
          setIsLoadingPost(false);
        }
      } else {
        setIsLoadingPost(false);
        setFormError([mailAnswer[1]]);
        setMailMessage("Verifique el email ingresado");
      }
    } catch (error) {
      setIsLoadingPost(false);
    }
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{message.encabezado}</DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth component="fieldset">
            <JsonForm
              data={data && data}
              error={isError}
              setFormAnswer={setFormAnswer}
              setInputDirecciones={setInputDirecciones}
              idformulario={idformulario}
              getIndexOf={getIndexOf}
              getIndexOfRes={getIndexOfRes}
              formError={formError}
              mailMessage={mailMessage}
              celularMessage={celularMessage}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={validateForm} color="primary">
            {isLoadingPost ? "Enviando..." : "Enviar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Formulario;
