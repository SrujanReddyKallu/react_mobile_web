import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Register from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import {auth} from "./firebase";
import Example from "./pages/jugad";
import Dashboard from "./pages/Dashboard";
import project1 from "./pages/project1";
import Project1 from "./pages/project1";
import { HashRouter, Link } from "react-router-dom";

function App() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.email?user.email:"");
            } else setUserName("");
        });
    }, []);
    return (
        <HashRouter basename='/'>
            <Routes>
                <Route path="/ReactWeb" element={<Example/>}/>
                <Route path="/ReactWeb/signup" element={<Register/>}/>
                <Route path="/ReactWeb/login" element={<Login/>}/>
                <Route path="/ReactWeb/jugad" element={<Example/>}/>
                <Route path="/ReactWeb/dashboard" element={<Dashboard/>}/>
                <Route path="/ReactWeb/project1" element={<Project1/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
