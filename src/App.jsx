import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./style/reset.css";
import NotesApp from "./NotesApp";
function App() {
  return (
    <>
      <Navbar />
      <NotesApp />
    </>
  );
}

export default App;
