import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />}></Route>
          <Route
            exact
            path="/employees"
            element={<ListEmployeeComponent />}
          ></Route>
          <Route
            exact
            path="/add-employee"
            element={<CreateEmployeeComponent />}
          ></Route>
          <Route
            exact
            path="/update-employee/:id"
            element={<UpdateEmployeeComponent />}
          ></Route>
          <Route
            exact
            path="/view-employee/:id"
            element={<ViewEmployeeComponent />}
          ></Route>
          {/* <ListEmployeeComponent /> */}
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
