import React from "react";
// import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Navbar from "./components/navigation/Navbar";
import Socials from "./components/socials/Socials";

// import About from "./pages/about-me/About";
// import Contacts from "./pages/contacts/Contacts";
// import Button from "./components/button/Button";
// import Main from "./pages/main/Main.page";
// import Projects from "./pages/projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Socials />
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, Tania!</h1>
//     </div>
//   );
// }

export default App;
