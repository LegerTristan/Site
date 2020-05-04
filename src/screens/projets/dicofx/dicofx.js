import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function DicoFX(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>DicoFX 
                <img src={process.env.PUBLIC_URL + "/icone/iconeJFX.png"} alt=" : JavaFX" title="Outil utilisé : JavaFX"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.png"}  alt="DicoFX" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>

                    <h3>Présentation</h3>

                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                        Développé seul en JavaFX durant les vacances d'été 2019. <br />
                        Ce dictionnaire permet de créer des définitions de et de les ranger dans une catégorie, celle-ci sont sauvegardés automatiquement dans l'application. <br/>
                        Une fois rangée dans une catégorie, on peut se rendre dans le menu Révision et réviser la catégorie qu'on le souhaite, les mots seront affichés
                        un par un à votre écran et vous devrez alors réciter la définition exacte du mot. <br />
                        Il est également possible d'effectuer l'opération dans l'autre sens, c'est-à-dire, de réviser le mot en ayant que sa définition à vue d'œil. <br />
                        Une fois la révision terminée, l'application vous renvoie le nombre de bonnes réponses. <br />
                    </p>

                    <h3>Fonctionnement du projet</h3>

                    <p>Pour réaliser ce projet, j'ai utilisé la bibliothèque JavaFX qui offre la possibilité de créer une interface 
                        graphique pour des applications de bureau. <br />
                        JavaFX est donc au centre de mon application puisqu'en plus de créer le visuel, il m'a permis de gérer les écouteurs 
                        sur les différents boutons qui, eux, font appel à la méthode attendues. <br />
                        En dehors des éléments apportés par JavaFX, la partie Contrôleur et la partie Modèle (MVC) sont 
                        réalisés simplement en Java via des collections. <br />
                        Concernant la sauvegarde, elle s'effectue automatiquement après toutes modifications effectuées dans 
                        les définitions ou les catégories. <br />
                        Toutefois, pour le système de révision, qui permet de s'entraîner sur les révisions que l'on souhaite 
                        sans contrainte de temps, les notes ne sont pas enregistrées dans l'application.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Dans un premier temps, j'ai réfléchi à toutes les fonctionnalités qui m'étaient nécessaire, 
                        j'ai donc décelé des fonctionnalités qui n'étaient pas visibles comme ça telles que la sauvegarde automatique. <br />
                        De plus, ça m'a aidé à établir des tests à réaliser notamment vérifier que l'utilisateur ne demande pas de réviser 
                        une catégorie de définition où il n'y en a pas. <br />
                        Une fois les fonctionnalités et les tests nécessaires établis, j'ai programmé rapidement mon menu, puis j'ai commencé 
                        par développer la gestion des définitions, qui sont nécessaires à la gestion des catégories. <br />
                        Par la suite, j'ai réalisé ma sauvegarde automatique, ce qui m'a permis en plus d'avoir un jeu d'essai pour ma fonctionnalité 
                        "Réviser", et pour finir, j'ai mis en place le système de révision. <br />
                        Également, à chaque fois qu'une fonctionnalité était terminée, je refactorais quelques méthodes pour rendre 
                        mon code plus simple.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                        Également, j'ai pu concevoir des fonctionnalités un peu plus compliquées et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />
                        Par exemple, le système de révision était coriace à programmer puisque l'accès aux notes dans une catégorie n'était pas facile. <br />
                        De plus, cette application m'a appris à contrôler régulièrement les actions de l'utilisateur en vérifiant que celui-ci ne rencontre pas d'exceptions 
                        sur diverses fonctionnalités. <br />
                        Globalement, ce projet m'a appris à être plus vigilant dans ma méthode de développement, de mieux concevoir une application. <br />
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.PNG"}  alt="DicoFX" />
                        <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    
                    <h3>Présentation</h3>

                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                        Développé seul en JavaFX durant les vacances d'été 2019. <br />
                        Ce dictionnaire permet de créer des définitions de et de les ranger dans une catégorie, celle-ci sont sauvegardés automatiquement dans l'application. <br/>
                        Une fois rangée dans une catégorie, on peut se rendre dans le menu Révision et réviser la catégorie qu'on le souhaite, les mots seront affichés
                        un par un à votre écran et vous devrez alors réciter la définition exacte du mot. <br />
                        Il est également possible d'effectuer l'opération dans l'autre sens, c'est-à-dire, de réviser le mot en ayant que sa définition à vue d'œil. <br />
                        Une fois la révision terminée, l'application vous renvoie le nombre de bonnes réponses. <br />
                    </p>

                    <h3>Fonctionnement du projet</h3>

                    <p>Pour réaliser ce projet, j'ai utilisé la bibliothèque JavaFX qui offre la possibilité de créer une interface 
                        graphique pour des applications de bureau. <br />
                        JavaFX est donc au centre de mon application puisqu'en plus de créer le visuel, il m'a permis de gérer les écouteurs 
                        sur les différents boutons qui, eux, font appel à la méthode attendues. <br />
                        En dehors des éléments apportés par JavaFX, la partie Contrôleur et la partie Modèle (MVC) sont 
                        réalisés simplement en Java via des collections. <br />
                        Concernant la sauvegarde, elle s'effectue automatiquement après toutes modifications effectuées dans 
                        les définitions ou les catégories. <br />
                        Toutefois, pour le système de révision, qui permet de s'entraîner sur les révisions que l'on souhaite 
                        sans contrainte de temps, les notes ne sont pas enregistrées dans l'application.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Dans un premier temps, j'ai réfléchi à toutes les fonctionnalités qui m'étaient nécessaire, 
                        j'ai donc décelé des fonctionnalités qui n'étaient pas visibles comme ça telles que la sauvegarde automatique. <br />
                        De plus, ça m'a aidé à établir des tests à réaliser notamment vérifier que l'utilisateur ne demande pas de réviser 
                        une catégorie de définition où il n'y en a pas. <br />
                        Une fois les fonctionnalités et les tests nécessaires établis, j'ai programmé rapidement mon menu, puis j'ai commencé 
                        par développer la gestion des définitions, qui sont nécessaires à la gestion des catégories. <br />
                        Par la suite, j'ai réalisé ma sauvegarde automatique, ce qui m'a permis en plus d'avoir un jeu d'essai pour ma fonctionnalité 
                        "Réviser", et pour finir, j'ai mis en place le système de révision. <br />
                        Également, à chaque fois qu'une fonctionnalité était terminée, je refactorais quelques méthodes pour rendre 
                        mon code plus simple.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                        Également, j'ai pu concevoir des fonctionnalités un peu plus compliquées et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />
                        Par exemple, le système de révision était coriace à programmer puisque l'accès aux notes dans une catégorie n'était pas facile. <br />
                        De plus, cette application m'a appris à contrôler régulièrement les actions de l'utilisateur en vérifiant que celui-ci ne rencontre pas d'exceptions 
                        sur diverses fonctionnalités. <br />
                        Globalement, ce projet m'a appris à être plus vigilant dans ma méthode de développement, de mieux concevoir une application. <br />
                    </p>
                </div>
            )}
        </div>
    )
}
