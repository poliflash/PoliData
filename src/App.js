import React from "react";
import Navbar from "./components/Navbar";
import Formularios from "./components/formularios";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useFetch } from "./components/hooks/useFetch";

function App() {
  const href = new URL(window.location.href);
  const cedula = href.searchParams.get("cedula");

  const url =
    "https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=10&identificacion=";

  const { data, isLoading, isError } = useFetch(url + cedula);

  return (
    <div className="App">
      <CssBaseline />
      <Navbar data={data} isLoading={isLoading} isError={isError} />
      <Formularios dataPersona={data} cedula={cedula} />
    </div>
  );
}

export default App;
