import React from "react";
import './App.css';
import profileComponent from "./Profile/profileComponent";
import photo from "./Profile/photo.jpg";


function App() {
  const handleAlert = (name) => alert(`Profile user : ${name}`);
  return (
    <>
    <profileComponent fullName="Mejdi Ben Ammou"  bio="Learning web development" profession="Electrical engineering" handleAlert={handleAlert}>
    <img src='./Profile/photo.jpg' alt='mejdiPhoto'/>
    </profileComponent>
    </>
  );
}

export default App;
