import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import { useFetch } from "./components/hooks/useFetch";

const App = () => {
  const href = new URL(window.location.href);
  const cedula = href.searchParams.get("cedula");

  const url =
    "https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=10&identificacion=";

  const { data, isLoading, isError } = useFetch(url + cedula);

  return (
    <div className="App">
      <CssBaseline />
      <Navbar data={data} isLoading={isLoading} isError={isError} />
      <Dashboard
        data={data}
        cedula={cedula}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
