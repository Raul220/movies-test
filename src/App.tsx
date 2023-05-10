import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { loadMovies } from "./services/services";

function App() {
  useEffect(() => {
    loadMovies({ api_key: "8f781d70654b5a6f2fa69770d1d115a3" })
    .then(res => {
      console.log(res?.json())
    })
  }, []);
  return (
    <section className="App">
      <h2>React App</h2>
    </section>
  );
}

export default App;
