import "./App.css";
import User from "./page/User";
import Location from "./page/Location";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import AddLocation from "./components/AddLocation";
import UpdateLocation from "./components/UpdateLocation";
import AssignUser from "./components/AssignUser";
import AssignUserList from "./components/AssignUserList";
import Logout from "./page/Logout";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/user/create" Component={AddUser}></Route>
      <Route path="/user/update/:id" Component={UpdateUser}></Route>

      <Route path="/location/create" Component={AddLocation}></Route>
      <Route path="/location/update/:id" Component={UpdateLocation}></Route>
      <Route path="/location/assign/:locationId" Component={AssignUser}></Route>
      <Route
        path="/location/:locationId/users"
        Component={AssignUserList}
      ></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
}

export default App;
