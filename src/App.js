import "./App.css";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./page/User";
import Location from "./page/Location";
import AddUser from "./components/AddUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/user" element={<User />}>
          <Route path="/user/create" Component={AddUser}></Route>
        </Route>
        <Route path="/location" element={<Location />}></Route>
        {/* <Route path="/user/create" element={<AddUser />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
