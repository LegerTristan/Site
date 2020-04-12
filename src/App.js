import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Projets } from './screens/projets';
import { Presentation } from './screens/presentation';

function App() {
  return(
    <HashRouter>
        <div className="container">
            <AppBar position="static">
                <nav>
                    <ul>
                        <li><Link to="/">PRÉSENTATION</Link></li>
                        <li><Link to="/projets">PROJETS</Link></li>
                        <li><a href={process.env.PUBLIC_URL + "/pdf/CV.pdf"} target="_blank" rel="noopener noreferrer">CV</a></li>
                    </ul>
                </nav>
            </AppBar>
            
            <Route exact path="/" component={Presentation} />
            <Route path="/projets" component={Projets} />

            <footer>
                <div>
                    <div>
                        <p><img src={process.env.PUBLIC_URL + "/icone/mail.png"} alt="Icone de mail" className="iconeContact"/><a href="mailto:tristan.leger@etu.unilim.fr">tristan.leger@etu.unilim.fr</a></p>
                        <p><img src={process.env.PUBLIC_URL + "/icone/github.png"} alt="Logo de GitHub" className="iconeContact"/><a href="https://github.com/LegerTristan" target="_blank" rel="noopener noreferrer">LegerTristan</a></p>
                    </div>  
                    <p>TRISTAN LÉGER © 2020</p>
                </div> 
            </footer>
        </div>
    </HashRouter>
)
}

export default App;
