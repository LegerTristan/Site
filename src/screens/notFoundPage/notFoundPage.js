import React from 'react';
import './notFoundPage.css';

import { Link } from 'react-router-dom';

export function NotFoundPage(){
    return(
        <div className="containernFP">
            <h1>404</h1>
            <p>Cette page n'existe pas ! :( <br/>
                <Link to="/">Clique ici pour revenir à l'accueil</Link>
            </p>

        </div>
    )
}
