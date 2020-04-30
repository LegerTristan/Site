import React from 'react';
import './biblio.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Biblio(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>Bibliothèque 
                <img src={process.env.PUBLIC_URL + "/icone/iconeCPlusPlus.png"} alt=" : C++ " className="outilBiblio" title="Outil utilisé : C++"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/biblio_visuel.jpg"}  alt="Bibliothèque" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/Bibliotheque" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Cette application permet d'enregistrer des livres ainsi que leur auteur, leur genre etc sur l'interface console. <br />
                    Il s'agit du premier projet développé à l'IUT du Limousin. <br /> 
                    Il m'a permis d'apprendre le fonctionnement des sauvegardes et de mettre en pratique les bases de la programmation que j'avais vu jusque-là.
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/biblio_visuel.jpg"}  alt="Bibliothèque" />
                        <figcaption><a href="https://github.com/LegerTristan/Bibliotheque" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Cette application permet d'enregistrer des livres ainsi que leur auteur, leur genre etc sur l'interface console. <br />
                    Il s'agit du premier projet développé à l'IUT du Limousin. <br /> 
                    Il m'a permis d'apprendre le fonctionnement des sauvegardes et de mettre en pratique les bases de la programmation que j'avais vu jusque-là.
                    </p>
                </div>
            )}
        </div>
    )
}
