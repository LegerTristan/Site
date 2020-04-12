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
                    classes={{
                        root: 'cercleAvatar'
                    }}
                />
                <h1>TRISTAN LÉGER</h1>
                <p>Étudiant en Informatique à l'IUT du Limousin</p>
            </div>

            <div className="colonnes">
                <div className="firstCol">
                    <h2>À PROPOS DE MOI</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                </div>

                <div className="secondCol">
                    <h2>FORMATIONS</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                    <Link to="/formations">- En savoir plus -</Link>
                </div>

                <div className="thirdCol">
                    <h2>DERNIÈRES EXPÉRIENCES</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                    <Link to="/projets">- En savoir plus -</Link>
                </div>
            </div>
        </div>
    )
}
