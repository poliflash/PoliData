import React from "react";
import Navbar from "./components/Navbar";
import Formulario from "./components/formularios";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Formulario />
    </div>
  );
}

export default App;