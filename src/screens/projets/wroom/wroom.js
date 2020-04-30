import React from 'react';
import './wroom.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Wroom(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
        <h2>Wroom 
            <img src={process.env.PUBLIC_URL + "/icone/iconeNodeJS.png"} alt=" : NodeJS " className="outilWroom" title="Outil utilisé : NodeJS"/>
        </h2>
        {matches && (
            <div className="visuelLien">
                <figure>
                        <img src={process.env.PUBLIC_URL + "/images/wroom_visuel.png"}  alt="Écran d'accueil du site" />
                        <figcaption><a href="https://github.com/LegerTristan/Wroom" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                </figure>
                <p>Site web réalisé en NodeJS avec les librairies Express et Handlebars pour reprendre le modèle du pattern MVC (Modèle - Vue - Contrôleur) <br />
                    J'ai développé ce site lors de ma deuxième année de DUT Informatique afin de maîtriser le NodeJS et structurer le code selon le pattern MVC. <br />
                    Ce site web concernen les pilotes de F1 et permet à l'utilisateur de consulter la liste de spilotes, les écuries ainsi que les circuits et donc les courses. <br />
                    L'administrateur peut, quant à lui, se connecter et éditer les différentes relations présentes dans la base de données, à savoir,
                     les éléments cités précédemment, les sponsors, les finances ainsi que les voitures.
                </p>
            </div>
        )}

        {!matches && (
            <div className="visuelLienM">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/images/wroom_visuel.png"}  alt="Écran d'accueil du site" />
                    <figcaption><a href="https://github.com/LegerTristan/Wroom" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                </figure>
                <p>Site web réalisé en NodeJS avec les librairies Express et Handlebars pour reprendre le modèle du pattern MVC (Modèle - Vue - Contrôleur) <br />
                    J'ai développé ce site lors de ma deuxième année de DUT Informatique afin de maîtriser le NodeJS et structurer le code selon le pattern MVC. <br />
                    Ce site web concernen les pilotes de F1 et permet à l'utilisateur de consulter la liste de spilotes, les écuries ainsi que les circuits et donc les courses. <br />
                    L'administrateur peut, quant à lui, se connecter et éditer les différentes relations présentes dans la base de données, à savoir,
                     les éléments cités précédemment, les sponsors, les finances ainsi que les voitures.
                </p>
            </div>
        )}
    </div>
    )
}
