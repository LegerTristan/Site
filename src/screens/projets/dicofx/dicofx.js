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
                            <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.PNG"}  alt="DicoFX" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                    Développé seul en JavaFX durant les vacances d'été 2019. <br />
                    Ce dictionnaire permet de créer des définitions de et de les ranger dans une catégorie, celle-ci sont sauvegardés automatiquement dans l'application. <br/>
                    Une fois rangée dans une catégorie, on peut se rendre dans le menu Révision et réviser la catégorie qu'on le souhaite, les mots seront affichés
                     un par un à votre écran et vous devrez alors réciter la définition exacte du mot. <br />
                     Il est également possible d'effectuer l'opération dans l'autre sens, c'est-à-dire, de réviser le mot en ayant que sa définition à vue d'oeil. <br />
                     Une fois la révision terminée, l'application vous renvoie le nombre de bonnes réponses. <br />
                    Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                    Également, j'ai pu concevoir des fonctionnalités un peu plus compliqué et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />
                    Par exemple, le système de révision était coriace à programmer puisque l'accès aux notes dans une catégorie n'était pas toujours facile. <br />
                    De plus, cette application m'a appris à contrôler règulièrement les actions de l'utilisateur en vérifiant que celui-ci ne rencontre pas d'exceptions 
                    sur divers fonctionnalités. <br />
                    <br />
                    Globalement, ce projet m'a appris à être plus vigilant dans ma méthode de développement, de mieux concevoir une application. <br />
                    Elle m'a aussi permis de découvrir plus clairement, via la pratique, le principe du modèle MVC.
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.PNG"}  alt="DicoFX" />
                        <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                    Développé seul en JavaFX durant les vacances d'été 2019. <br />
                    Ce dictionnaire permet de créer des définitions de et de les ranger dans une catégorie, celle-ci sont sauvegardés automatiquement dans l'application. <br/>
                    Une fois rangée dans une catégorie, on peut se rendre dans le menu Révision et réviser la catégorie qu'on souhaite, les mots seront affichés
                     un par un à votre écran et vous devrez alors réciter la définition exacte du mot. <br />
                     Il est également possible d'effectuer l'opération dans l'autre sens, c'est-à-dire, de réviser le mot en ayant que sa définition sous les yeux. <br />
                     Une fois la révision terminée, l'application vous renvoie le nombre de bonnes réponses. <br />
                    Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                    Également, j'ai pu concevoir des fonctionnalités un peu plus compliqué et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />
                    Par exemple, le système de révision était coriace à programmer puisque l'accès aux notes dans une catégorie n'était pas toujours facile. <br />
                    De plus, cette application m'a appris à contrôler régulièrement les actions de l'utilisateur en vérifiant que celui-ci ne rencontre pas d'exception 
                    sur divers fonctionnalités. <br />
                    <br />
                    Globalement, ce projet m'a appris à être plus vigilant dans ma méthode de développement, de mieux concevoir une application. <br />
                    Elle m'a aussi permis de découvrir plus clairement, via la pratique, le principe du modèle MVC.
                    </p>
                </div>
            )}
        </div>
    )
}
