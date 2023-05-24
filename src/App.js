import logo from "./logo.svg";
import "./App.css";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
