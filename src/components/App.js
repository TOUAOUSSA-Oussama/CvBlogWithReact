import React from 'react';
import GitHub from './GitHub';
import Mail from './Mail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobaleStyle } from './GloableStyle';
import Navbar from "./Navbar/Navbar";
import Acceuil from './pages/Acceuil';
const App = () => {
    return (
        <div>
            <Router>
                <GlobaleStyle />
                <Navbar />
            
                {/* Afficher la componenet Acceuil */}
                <Routes>
                    <Route path='/' exact  element={<Acceuil/>} />
                </Routes> 
            </Router>
            <h1>La partie du CV concernant mon Github :</h1>
            <GitHub />
            <h1> La partie du CV pour envoyer un commentaire (Get in touch) :</h1>
            <Mail />
        </div>
    );
};

export default App;