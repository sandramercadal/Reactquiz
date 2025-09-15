import React from "react";
import "./App.css";
import Hero from "./Hero";
import Quiz from "./Quiz";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Quiz />
        <Footer />
      </header>
    </div>
  );
}
