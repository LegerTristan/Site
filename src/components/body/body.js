import React from 'react';
import './body.css';

import AppBar from '@material-ui/core/AppBar';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Projets } from '../../screens/projets';
import { Presentation } from '../../screens/presentation';
import { PDF } from '../../pdf/CV.pdf';

export function Body(){
    return(
        <HashRouter>
            <div className="container">
                <AppBar position="static">
                    <nav>
                        <ul>
                            <li><Link to="/">PRÉSENTATION</Link></li>
                            <li><Link to="/projets">PROJETS</Link></li>
                            <li><Link to="/cv" target="_blank" rel="noopener noreferrer">CV</Link></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </nav>
                </AppBar>
                
                <Route exact path="/" component={Presentation} />
                <Route path="/projets" component={Projets} />
                <Route path="/cv" component={PDF} />

                <footer>
                    <div>
                        <div>
                            <p>Email : tristan.leger@etu.unilim.fr</p>
                            <p>GitHub : <a href="https://github.com/LegerTristan" target="_blank" rel="noopener noreferrer">LegerTristan</a></p>
                        </div>  
                        <p>TRISTAN LÉGER © 2020</p>
                    </div> 
                </footer>
            </div>
        </HashRouter>
    )
}
