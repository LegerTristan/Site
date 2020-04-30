import React from 'react';
import './combava.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Combava(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>Combava 
                <img src={process.env.PUBLIC_URL + "/icone/iconeHTML5_CSS3.jpg"} alt=" : HTML5 et CSS3 " className="outilCombava" title="Outil utilisé : HTML5 et CSS3"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"}  alt="Combava" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/Combava" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Ce projet consistait à réaliser un site vitrine pour la citronnade. <br />
                      Le site devait avoir l'aspect typique des citronnade vendus par les enfants en Amérique. <br />
                      J'ai réalisé ce site en duo lors de ma première année de DUT.
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"}  alt="Combava" />
                        <figcaption><a href="https://github.com/LegerTristan/Combava" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Ce projet consistait à réaliser un site vitrine pour la citronnade. <br />
                      Le site devait avoir l'aspect typique des citronnade vendus par les enfants en Amérique. <br />
                      J'ai réalisé ce site en duo lors de ma première année de DUT.
                    </p>
                </div>
            )}
        </div>
    )
}
