import React from 'react';
import './souvenange.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Souvenange(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
        <h2>Souvenange
            <img src={process.env.PUBLIC_URL + "/icone/iconeReact.png"} alt=" : React, " className="outilSvnange" title="Outil utilisé : React"/>
            <img src={process.env.PUBLIC_URL + "/icone/iconeRedux.png"} alt=" Redux" className="outilSvnange" title="Outil utilisé : Redux"/>
        </h2>
        {matches && (
            <div className="visuelLien">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"}  alt="Un ange" />
                </figure>
                <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                                dans une équipe de 5 personnes, moi inclus. <br />
                                Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                                une association qui accompagne les familles dans le deuil périnatal par la photographie.
                                En raison d'une augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                                à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                                Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                                communication entre la secrétaire de l'association et les bénévoles. <br />
                                Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage 
                                jamais vu en cours, qu'en savoir-être. <br />
                                Par conséquent, j'ai appris en autonomie, et en autodidaxie à travailler avec une technologie qui m'est inconnue,
                                à réagir et trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                                Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                                une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client. <br />
                                Étant donné que la marque est déposée par l'association, le projet n'est pas disponible sur GitHub.
                </p>
            </div>
        )}

        {!matches && (
            <div className="visuelLienM">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"}  alt="Un ange" />
                </figure>
                <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                                dans une équipe de 5 personnes, moi inclus. <br />
                                Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                                une association qui accompagne les familles dans le deuil périnatal par la photographie.
                                En raison d'une augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                                à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                                Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                                communication entre la secrétaire de l'association et les bénévoles. <br />
                                Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage 
                                jamais vu en cours, qu'en savoir-être. <br />
                                Par conséquent, j'ai appris en autonomie, et en autodidaxie à travailler avec une technologie qui m'est inconnue,
                                à réagir et trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                                Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                                une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client. <br />
                                Étant donné que la marque est déposée par l'association, le projet n'est pas disponible sur GitHub.
                </p>
            </div>
        )}
    </div>
    )
}
