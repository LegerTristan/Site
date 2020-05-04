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
                <h3>Présentation</h3>

                <p>Site web réalisé en NodeJS avec les bibliothèques Express et Handlebars pour reprendre le principe du pattern MVC (Modèle - Vue - Contrôleur) <br />
                    Il concerne les pilotes de F1 et permet à l'utilisateur de consulter la liste des pilotes, 
                    de voir les écuries participantes au grand prix ainsi que leur sponsor, l'utilisateur peut aussi accéder aux
                     derniers grand prix et leur résultat.<br />
                    J'ai réalisé ce projet au cours de ma deuxième année à l'IUT du Limousin afin d'apprendre à utiliser le Javascript 
                    côté serveur mais également d'étendre mes outils en programmation Web.
                </p>

                <h3>Fonctionnement du projet</h3>

                <p>Concernant les technologies, nous avons donc utilisé Express qui est une infrastructure d'application Web pour nodeJS, en outre,
                     elle m'a permis de faciliter l'upload de fichier vers la base données, de réaliser des routes pour lier chaque composants JS, ce qui nous évite de créer plusieurs pages html. <br />
                     Ainsi, on a qu'une seule page html qui appelle le composant attendu grâce au fichier router et ce composant appelle le modèle afin qu'il réalise les requêtes attendues, 
                     enfin, le composant renvoie le résultat à afficher. <br />
                     C'est à ce moment qu'handlebars intervient, puisqu'il nous permet de créer notre vue avec les balises HTML5 en y combinant des principes de programmation tels que les boucles. <br />
                     J'ai ainsi pu afficher une liste de données sans trop de difficultés ou encore j'ai pu simplifier l'affichage de données comme les dates qui étaient beaucoup trop
                      fastidieux à lire.
                </p>

                <h3>Déroulement du projet</h3>

                <p>Le site est divisé en deux parties, une partie utilisateur qui, lui, a accès à la consultation des différentes données 
                    présentes dans la base tels que les pilotes et, une partie administrative qui gère les différentes données de la base 
                    ainsi que leur relation. <br />
                    Dans un premier temps, j'ai commencé le développement avec la partie utilisateur qui nécessitait moins de notions et 
                    de connaissances en JavaScript et vu que nous n'avions pas étudié le Javascript jusque-là, cela m'a offert une 
                    approche plus claire et efficace du JavaScript. <br />
                    La seconde partie, quant à elle, demandé des notions un peu plus poussées, notamment pour la gestion des données 
                    et le passage de l'information d'une page à l'autre qui était nettement plus compliqué que lors de la première partie. <br />
                    En outre, sur la première partie, le travail était plus concentré sur la récupération des données et l'affichage de 
                    celle-ci grâce à Handlebars, alors que la seconde partie était des requêtes SQL plus importantes, un système de connexion au site, 
                    une redirection avec ou sans paramètres et d'autres fonctionnalités encore.
                </p>

                <h3>Ce que j'ai appris</h3>

                <p>Ce projet m'a donc apporté beaucoup d'éléments et d'outils qui me seront utiles dans le développement Web, tout en me permettant de revoir 
                      un coup le pattern MVC. <br />
                      De plus, la gestion des données et l'utilisation de requêtes m'a permis de gagner en savoir et en pratique avec le langage SQL et les bases de données 
                      qui me posait, parfois, quelques soucis auparavant.
                </p>

                <p>
                    
                      
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
