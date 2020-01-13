import React from "react";
import Navbar from "./components/Navbar";
import Formularios from "./components/formularios";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const href = new URL(window.location.href);
  const cedula = href.searchParams.get("cedula");

  return (
    <div className="App">
      <CssBaseline />
      <Navbar cedula={cedula} />
      <Formularios cedula={cedula} />
    </div>
  );
}

export default App;