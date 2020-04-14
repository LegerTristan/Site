import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Presentation } from './screens/presentation';
import { Formations } from './screens/formations';
import { Projets } from './screens/projets';
import { NotFoundPage } from './screens/notFoundPage';

function App() {
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <HashRouter>
            <div className="container">
                {matches && (
                    <AppBar position="static">
                        <nav>
                            <ul>
                                <li><Link to="/">PRÉSENTATION</Link></li>
                                <li><Link to="/formations">FORMATIONS</Link></li>
                                <li><Link to="/projets">PROJETS</Link></li>
                                <li><a href={process.env.PUBLIC_URL + "/pdf/CV.pdf"} target="_blank" rel="noopener noreferrer">CV</a></li>
                            </ul>
                        </nav>
                    </AppBar>
                )}

                {!matches && (
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <h1 className="menuMobile">Menu</h1>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <nav className="navMobile">
                                <ul>
                                    <li><Link to="/">PRÉSENTATION</Link></li>
                                    <li><Link to="/formations">FORMATIONS</Link></li>
                                    <li><Link to="/projets">PROJETS</Link></li>
                                    <li><a href={process.env.PUBLIC_URL + "/pdf/CV.pdf"} target="_blank" rel="noopener noreferrer">CV</a></li>
                                </ul>
                            </nav>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}  
                
                            
                <Switch>
                    <Route exact path="/" component={Presentation} />
                    <Route path="/projets" component={Projets} />
                    <Route path="/formations" component={Formations} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>

                {matches && (
                    <footer>
                        <div>
                            <div>
                                <p><img src={process.env.PUBLIC_URL + "/icone/mail.png"} alt="Icone de mail" className="iconeContact"/><a href="mailto:tristan.leger@etu.unilim.fr">tristan.leger@etu.unilim.fr</a></p>
                                <p><img src={process.env.PUBLIC_URL + "/icone/github.png"} alt="Logo de GitHub" className="iconeContact"/><a href="https://github.com/LegerTristan" target="_blank" rel="noopener noreferrer">LegerTristan</a></p>
                            </div>  
                            <p>TRISTAN LÉGER © 2020</p>
                        </div> 
                    </footer>
                )}
                {!matches && (
                    <footer className="footerMobile">
                        <div>
                            <div>
                                <p><img src={process.env.PUBLIC_URL + "/icone/mail.png"} alt="Icone de mail" className="iconeContact"/><a href="mailto:tristan.leger@etu.unilim.fr">tristan.leger@etu.unilim.fr</a></p>
                                <p><img src={process.env.PUBLIC_URL + "/icone/github.png"} alt="Logo de GitHub" className="iconeContact"/><a href="https://github.com/LegerTristan" target="_blank" rel="noopener noreferrer">LegerTristan</a></p>
                            </div>  
                            <p className="cpyrght">TRISTAN LÉGER © 2020</p>
                        </div> 
                    </footer>
                )}
            </div>
        </HashRouter>
    )
}

export default App;
