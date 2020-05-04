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

                    <h3>Présentation</h3>

                    <p>Il s'agit du premier projet que j'ai développé à l'IUT du Limousin en 2018. <br />
                        J'ai réalisé ce projet en duo avec un camarade de promotion, l'objectif était de créer une application 
                        de gestion des livres<br />
                        Nous devions également rajouter des fonctionnalités imaginées par nous-même afin de personnaliser notre travail 
                        par rapport aux autres étudiants.
                    </p>

                    <h3>Fonctionnement du projet</h3>

                    <p>L'interface graphique se trouve la console qui est ouvert lors de l'exécution du projet. <br />
                        Dessus, il y a le menu contenant les différents sous-menus à savoir, gestion des livres, gestion des auteurs, 
                        gestion des genres et gestion des censures. <br />
                        Le menu fonctionne par saisi de texte, c'est-à-dire, si on appuie sur la touche 3, cela appellera le sous-menu 
                        de la gestion des genres. <br />
                        Dans chaque sous-menu il y a les différentes actions possibles et, une fois qu'on a fini de faire nos modifications, 
                        il nous suffit de revenir au menu principal, et de sauvegarder.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Nous avons eu un petit peu plus d'1 mois pour réaliser ce projet. <br />
                        Au début, il nous a fallu réaliser le minimum attendu, à savoir, la gestion des livres 
                        comme l'ajout, la suppression ou encore la consultation des ouvrages. <br />
                        Une fois la base programmée, il nous a fallu développer d'autres fonctionnalités qui devaient être
                         propre à notre recherche et notre imagination. <br />
                        C'est pour ça, que nous avons créé une fonctionnalité de gestion du genre du livre, et une autre 
                        concernant la gestion des censures. <br />
                        Enfin, nous avons ajouté un système de sauvegarde manuelle relativement simple.
                    </p>


                    <h3>Ce que j'ai appris</h3>

                    <p>Ce projet m'a permis de mettre en pratique les bases de la programmation que j'avais vu, mais aussi
                        de renforcer ma communication et mon organisation vis-à-vis de mon équipe.
                        Ainsi, j'ai gagné en savoir-faire en consolidant mes bases et en savoir-être en participant à un projet de groupe 
                        nécessitant organisation et communication.
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
