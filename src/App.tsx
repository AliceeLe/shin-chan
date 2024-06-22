import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import {  Welcome, Characters, Satire, Family, Friends } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="appContainer">
        <Routes >
          <Route path="/" element={<Welcome />}/>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/themes/family" element={<Family />} />
          <Route path="/themes/friends" element={<Friends />} />
          <Route path="/themes/satire" element={<Satire />} />
        </Routes>
      </div>
    </>
  );
}

export {App};
