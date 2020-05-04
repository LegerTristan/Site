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

                <h3>Présentation</h3>

                <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                    dans une équipe de 5 personnes, moi inclus. <br />
                    Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                    une association qui accompagne les familles dans le deuil périnatal par la photographie.
                    En raison d'une augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                    à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                    Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                    communication entre la secrétaire de l'association et les bénévoles.
                </p>

                <h3>Fonctionnement du projet</h3>

                <p>Le client nous a demandé des outils très spécifiques, à savoir, React et Redux pour le front-end, et Strapi pour le back-end <br/>
                    React et Redux sont des bibliothèques JavaScript offrant, pour le premier, des outils bien plus efficaces et simples
                     pour structurer notre site et interagir avec, ce qui nous permet de gagner en rapidité. <br />
                     Quant au second, il a permis de stocker nos données dans des stores, nous offrant ainsi une gestion plus simple de nos données. <br />
                    Sur le back-end, nous avons donc utilisé Strapi qui est un CMS (<i>Content Management System</i> ou Système de gestion de contenu en français) 
                    qui nous a offert la possibilité de créer les relations entre nos données via un modèle de données claire.<br />
                    Cela a rendu ainsi la création de la base de données plus simple à gérer que ce soit dans la mise à jour de celle-ci.
                </p>

                <h3>Déroulement du projet</h3>

                <p>Nous avons eu 5 mois pour réaliser ce projet, dans un premier temps, nous avons réalisé un Impact Mapping et un Story Mapping afin de déterminer 
                    la vue globale de notre projet et de prioriser les attentes de notre client. <br />
                    Puis dans un deuxième temps nous nous sommes intéressés aux outils à notre disposition en essayant de comprendre leur fonctionnement. <br />
                    Ensuite, j'ai réparti les tâches entre chaque membre de mon groupe et grâce à l'outil de versionnage Bitbucket, nous avons pu nous entraider 
                    tout en avançant sur divers composants en même temps, ce qui nous a fait un gain de temps précieux. <br />
                </p>


                <h3>Ce que j'ai appris</h3>

                <p>Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage 
                    jamais vu en cours, qu'en savoir-être. <br />
                    Par conséquent, j'ai appris en autonomie, et en autodidaxie à travailler avec une technologie qui m'est inconnue,
                    à réagir et trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                    De plus, je trouve que React est un outil intéressant et efficace pour réaliser des applications et je pense le réutiliser à l'avenir dans divers projets. <br />
                    Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                    une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client.
                </p>

                <p>Étant donné que la marque est déposée par l'association, le projet n'est pas disponible sur GitHub.</p>
            </div>
        )}

        {!matches && (
            <div className="visuelLienM">
                <figure>
                    <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"}  alt="Un ange" />
                </figure>
                
                <h3>Présentation</h3>

                <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                    dans une équipe de 5 personnes, moi inclus. <br />
                    Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                    une association qui accompagne les familles dans le deuil périnatal par la photographie.
                    En raison d'une augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                    à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                    Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                    communication entre la secrétaire de l'association et les bénévoles.
                </p>

                <h3>Fonctionnement du projet</h3>

                <p>Le client nous a demandé des outils très spécifiques, à savoir, React et Redux pour le front-end, et Strapi pour le back-end <br/>
                    React et Redux sont des bibliothèques JavaScript offrant, pour le premier, des outils bien plus efficaces et simples
                     pour structurer notre site et interagir avec, ce qui nous permet de gagner en rapidité. <br />
                     Quant au second, il a permis de stocker nos données dans des stores, nous offrant ainsi une gestion plus simple de nos données. <br />
                    Sur le back-end, nous avons donc utilisé Strapi qui est un CMS (<i>Content Management System</i> ou Système de gestion de contenu en français) 
                    qui nous a offert la possibilité de créer les relations entre nos données via un modèle de données claire.<br />
                    Cela a rendu ainsi la création de la base de données plus simple à gérer que ce soit dans la mise à jour de celle-ci.
                </p>

                <h3>Déroulement du projet</h3>

                <p>Nous avons eu 5 mois pour réaliser ce projet, dans un premier temps, nous avons réaliser un Impact Mapping et un Story Mapping afin de déterminer 
                    la vue globale de notre projet et de prioriser les attentes de notre client. <br />
                    Puis dans un deuxième temps nous nous sommes intéressé aux outils à notre disposition en essayant de comprendre leur fonctionnement. <br />
                    Ensuite, j'ai réparti les tâches entre chaque membre de mon groupe et grâce à l'outil de versionnage Bitbucket, nous avons pu nous entraider 
                    tout en avançant sur divers composants en même temps, ce qui nous a fait un gain de temps précieux. <br />
                </p>

                <h3>Ce que j'ai appris</h3>

                <p>Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage 
                    jamais vu en cours, qu'en savoir-être. <br />
                    Par conséquent, j'ai appris en autonomie, et en autodidaxie à travailler avec une technologie qui m'est inconnue,
                    à réagir et trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                    De plus, je trouve que React est un outil intéressant et efficace pour réaliser des appliactions et je pense le réutiliser à l'avenir dans divers projets. <br />
                    Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                    une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client.
                </p>

                <p>Étant donné que la marque est déposée par l'association, le projet n'est pas disponible sur GitHub.</p>
            </div>
        )}
    </div>
    )
}
