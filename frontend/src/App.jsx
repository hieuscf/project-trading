import React ,{useState , useContext} from "react";
import HomePage from "./pages/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Molecules/logo.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";
function App() {
  
   const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        color: theme ? "#333" : "#FFF",
        background: theme ? "#FFF" : "#000",
      }}
    >
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
