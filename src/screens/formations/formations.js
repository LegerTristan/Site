import React from 'react';
import './formations.css';

export function Formations(){
    return(
        <div className="containerFormations">
            <div className="iut">
                <div className="gauche">
                    <h2>DUT Informatique à l'IUT du Limousin</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                </div>
                <figure className="droite">
                    <img src={process.env.PUBLIC_URL + "/images/lgIUT.jfif"}  alt="Logo de l'IUT du Limousin"></img>

                    <figcaption>2018-2020 Limoges, 87000, France</figcaption>
                </figure>
            </div>

            <div className="lycee">
                <div className="gauche">
                    <h2>Baccalauréat scientifique au Lycée Jean-Baptiste Darnet</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                </div>
                <figure className="droite">
                    <img src={process.env.PUBLIC_URL + "/images/logoJB.jfif"}  alt="Lycée Jean-Baptiste Darnet"></img>

                    <figcaption>2016-2018 Saint-Yrieix la Perche, 87500, France</figcaption>
                </figure>
            </div>

        </div>
    )
}
