import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ListCourse from "./components/ListCourse";
import AuthContext from "./components/AuthContext";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/listcourse" element={<ListCourse />} />
          <Route path="/authcontext" element={<AuthContext />} />
          <Route path="/authprovider" element={<AuthProvider />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
