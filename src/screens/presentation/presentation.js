import React from 'react';
import './presentation.css';

import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

export function Presentation(){
    return(
        <div className="containerPresentation">
            <div className="entete">
                <Avatar 
                    src={process.env.PUBLIC_URL + "/images/photo_cv.jpg"} 
                    alt="Tristan LÉGER"
                />
                <h1>TRISTAN LÉGER</h1>
                <p>Étudiant en Informatique à l'IUT du Limousin</p>
            </div>

            <div className="colonnes">
                <div className="firstCol">
                    <h2>À PROPOS DE MOI</h2>

                    <p>Je m'appelle Tristan LÉGER.
                        J'aurais bientôt terminé mon DUT, et j'envisage de poursuivre mes études dans le secteur du multimédia et du numérique.
                        Étant passionné par l'univers du jeux-vidéo et l'animation, je désire suivre une formation dans le domaine du jeux-vidéo, plutôt orienté vers la programmation ou le game design.
                    </p>
                </div>

                <div className="secondCol">
                    <h2>FORMATIONS</h2>

                    <p> J'étudie depuis deux ans à l'IUT du Limousin où je suis un DUT Informatique,
                         j'y ai appris toutes les connaissances et les méthodes en informatiques et gestion de projets que je possède aujourd'hui.
                         Auparavant, j'ai obtenu mon Baccalauréat scientifique avec la mention Assez Bien au Lycée Jean-Baptiste Darnet (87).
                    </p>
                    <Link to="/formations">- En savoir plus -</Link>
                </div>

                <div className="thirdCol">
                    <h2>DERNIÈRES EXPÉRIENCES</h2>

                    <p> Dans le cadre de la validation de mon DUT, et de l'évolution de mes compétences professionelles,
                         je vais bientôt débuter un stage à la Mairie de Saint-Yrieix la Perche.
                         J'ai également développé plusieurs petits projets au cours de ces deux dernières années.
                         Parmi eux, j'ai développé personnellement un petit Memory sous Java et, pour un projet tuteuré,
                         je suis intervenu en tant que chef de projet pour l'association Souvenange.</p>
                    <Link to="/projets">- En savoir plus -</Link>
                </div>
            </div>
        </div>
    )
}
