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
                    Ce site web concerne les pilotes de F1 et permet à l'utilisateur de consulter la liste de spilotes, les écuries ainsi que les circuits et donc les courses. <br />
                    L'administrateur peut, quant à lui, se connecter et éditer les différentes relations présentes dans la base de données, à savoir,
                     les éléments cités précédemment, les sponsors, les finances ainsi que les voitures. <br />
                     Le site est donc divisé en deux parties, la partie utilisateur et la partie administrative, ces deux parties utilisent la même base de données contenant
                      les relations entre toutes nos tables et les données sur chacun de nos pilotes ainsi que nos écries etc. <br />
                    Concernant les technologies, nous avons donc utilisé Express qui est une infrastructure d'application Web pour nodeJS, en outre,
                     elle m'a permis de faciliter l'upload de fichier vers la base données, de réaliser des routes pour lier chaque composants JS, ce qui nous évite de créer plusieurs pages html. <br />
                     Ainsi, on a qu'une seule page html qui appelle le composant attendu grâce au fichier router et ce composant appelle le modèle afin qu'il réalise les requêtes attendues, 
                     enfin, le composant renvoie le résultat à afficher. <br />
                     C'est à ce moment qu'handlebars intervient, puisqu'il nous permet de créer notre vue avec les balises HTML5 en y combinant des principes de programmation tels que les boucles. <br />
                     J'ai ainsi pu afficher une liste de données sans trop de difficultés ou encore j'ai pu simplifier l'affichage de données comme les dates qui étaient beaucoup trop
                      fastidieux à lire. <br />
                      <br />
                      Ce projet m'a donc apporté beaucoup d'éléments et d'outils qui me seront utiles dans le développement Web, tout en me permettant de revoir 
                      un coup le pattern MVC. <br />
                      De plus, la gestion des données et l'utilisation de requêtes m'a permis de gagner en savoir et en pratique avec le langage SQL et les bases de données 
                      qui me posait, parfois, quelques soucis auparavant.
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
                    Ce site web concerne les pilotes de F1 et permet à l'utilisateur de consulter la liste de spilotes, les écuries ainsi que les circuits et donc les courses. <br />
                    L'administrateur peut, quant à lui, se connecter et éditer les différentes relations présentes dans la base de données, à savoir,
                     les éléments cités précédemment, les sponsors, les finances ainsi que les voitures. <br />
                     Le site est donc divisé en deux parties, la partie utilisateur et la partie administrative, ces deux parties utilisent la même base de données contenant
                      les relations entre toutes nos tables et les données sur chacun de nos pilotes ainsi que nos écuries etc. <br />
                    Concernant les technologies, nous avons donc utilisé Express qui est une infrastructure d'application Web pour nodeJS, en outre,
                     elle m'a permis de faciliter l'upload de fichier vers la base données, de réaliser des routes pour lier chaque composants JS, ce qui nous évite de créer plusieurs pages html. <br />
                     Ainsi, on a qu'une seule page html qui appelle le composant attendu grâce au fichier router.js et ce composant appelle le modèle afin qu'il réalise les requêtes attendues, 
                     enfin, le composant renvoie le résultat à afficher. <br />
                     C'est à ce moment qu'handlebars intervient, puisqu'il nous permet de créer notre vue avec les balises HTML5 en y combinant des principes de programmation tels que les boucles. <br />
                     J'ai ainsi pu afficher une liste de données sans trop de difficultés ou encore j'ai pu simplifier l'affichage de données comme les dates qui étaient beaucoup trop
                      fastidieux à lire. <br />
                      <br />
                      Ce projet m'a donc apporté beaucoup d'éléments et d'outils qui me seront utiles dans le développement Web, tout en me permettant de revoir 
                      un coup le pattern MVC. <br />
                      De plus, la gestion des données et l'utilisation de requête m'a permis de gagner en savoir et en pratique avec le langage SQL et les bases de données 
                      qui me posait, parfois, quelques soucis auparavant.
                </p>
            </div>
        )}
    </div>
    )
}
