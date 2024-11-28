import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { ProtectedRoute } from './components/privateRoute.js';
import SignUp from "./components/signup.js";
import Login from "./components/login.js";
import { Home } from "./components/home.js";
import { Logout } from './components/logout.js';
import { Navbar } from './components/navbar.js'; 
import { NewProject } from './components/newProject.js';
import { AllProjects } from './components/allProjects.js';

function App() {

  return (

    <Router>
      <Routes>
        {/* <Route path="/" element={ isLogin ? <Login /> : <SignUp onLoginClick={ ()=> {setIsLogin(true)} } /> } /> */}
        <Route path='/' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={ <ProtectedRoute /> }>
          <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />
            <Route path="/allProjects" element={<AllProjects />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;
