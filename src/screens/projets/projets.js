import React from 'react';
import './projets.css';

export function Projets(){
    return(
        <div className="containerProjets">
            <div className="memoryFX">
                <div className="gauche">
                    <h2>MemoryFX, <span>JavaFX</span></h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                </div>
                <figure className="droite">
                    <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"}  alt="Capture d'écran du jeu"></img>

                    <figcaption><a href="https://github.com/LegerTristan/MemoryFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                </figure>
            </div>

            <div className="souvenange">
                <div className="gauche">
                    <h2>Souvenange, <span>React/Redux</span></h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit id dolor quis molestie.
                        In magna urna, egestas ut fermentum non, eleifend ultricies metus. Vivamus et feugiat sapien.
                        Donec fringilla fringilla luctus. Mauris consectetur, augue dignissim auctor cursus, mi lacus consectetur nulla, sit amet venenatis tortor odio eu dui.
                        Vestibulum pretium dignissim vehicula. Nulla sem dolor, cursus et euismod a, dignissim a ligula.
                        Nunc ligula orci, mollis nec tortor luctus, elementum tristique sapien. </p>
                </div>
                <figure className="droite">
                    <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.png"}  alt="Capture d'écran du site"></img>

                    <figcaption><a href="https://github.com/LegerTristan " target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                </figure>
            </div>

        </div>
    )
}
