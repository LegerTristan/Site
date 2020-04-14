import React from 'react';
import './projets.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Projets(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerProjets">
            {matches && (
                <div>
                    <div className="memoryFX">
                        <div className="gauche">
                            <h2>MemoryFX <img src={process.env.PUBLIC_URL + "/icone/iconeJFX.png"} alt=" : JavaFX" className="jfx" title="Outil utilisé : JavaFX"/></h2>

                            <p>MemoryFX est tout simplement un memory, un jeu de mémoire où le but est de retrouver toutes les paires,
                                que j'ai développé avec la libraire JavaFX. <br />
                                J'ai réalisé ce projet lors des vacances d'été 2019 dans le but de me challenger, seul, sur le développement
                                d'une petite application, notamment en passant par sa conception. <br />
                                J'ai donc développé une première version du projet en suivant le la pattern MVC dans laquelle on peut donc jouer,
                                déterminer le nombre de "coups" nécessaire pour finir la partie et, enfin, calculer le score du joueur. <br />
                                J'ai, par la suite, refactoré l'application afin de simplifier la génération des cartes. <br />
                                Ce projet m'a permis de rassembler l'ensemble des connaissances en conception et en programmation
                                que j'ai obtenu au cours de ma première année. <br />
                                En outre, lors de ce projet, j'ai fais face à des difficultés qui ont nécessité une phase de réflexion pour trouver
                                une solution, mais aussi des phases de documentation pour comprendre certaines méthodes que je n'avais pas vu en cours dont la transition. <br />
                                Grâce à ça, j'ai appris à être plus autonome et à mieux concevoir une application. <br />
                            </p>
                        </div>
                        <figure className="droite">
                            <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"}  alt="Capture d'écran du jeu"></img>

                            <figcaption><a href="https://github.com/LegerTristan/MemoryFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                        </figure>
                    </div>

                    <div className="souvenange">
                        <div className="gauche">
                            <h2>Souvenange
                                <img src={process.env.PUBLIC_URL + "/icone/iconeReact.png"} alt=" : React, " className="outilSvnge" title="Outil utilisé : React"/>
                                <img src={process.env.PUBLIC_URL + "/icone/iconeRedux.png"} alt=" Redux" className="outilSvnge" title="Outil utilisé : Redux"/>
                            </h2>

                            <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                                dans une équipe de 5 personnes, moi inclus. <br />
                                Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                                une association qui accompagne les familles dans le deuil périnatal par la photographie.
                                En raison d'un augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                                à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                                Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                                communication entre la secrétaire de l'association et les bénévoles. <br />
                                Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage,
                                jamais vu en cours. <br />
                                Du coup, j'ai appris en autonomie et en autodidaxie, à travailler avec une technologie qui m'est inconnue
                                à réagir et à trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                                Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                                une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client.
                            </p>
                        </div>
                        <figure className="droite">
                            <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.png"}  alt="Capture d'écran du site"></img>

                            <figcaption><a href="https://github.com/LegerTristan " target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                        </figure>
                    </div>
                </div>
            )}

            {!matches && (
                <div>
                    <div className="memoryFX-M">
                        <div className="gaucheM">
                            <h2>MemoryFX <img src={process.env.PUBLIC_URL + "/icone/iconeJFX.png"} alt=" : JavaFX" className="jfx" title="Outil utilisé : JavaFX"/></h2>

                            <p>MemoryFX est tout simplement un memory, un jeu de mémoire où le but est de retrouver toutes les paires,
                                que j'ai développé avec la libraire JavaFX. <br />
                                J'ai réalisé ce projet lors des vacances d'été 2019 dans le but de me challenger, seul, sur le développement
                                d'une petite application, notamment en passant par sa conception. <br />
                                J'ai donc développé une première version du projet en suivant le la pattern MVC dans laquelle on peut donc jouer,
                                déterminer le nombre de "coups" nécessaire pour finir la partie et, enfin, calculer le score du joueur. <br />
                                J'ai, par la suite, refactoré l'application afin de simplifier la génération des cartes. <br />
                                Ce projet m'a permis de rassembler l'ensemble des connaissances en conception et en programmation
                                que j'ai obtenu au cours de ma première année. <br />
                                En outre, lors de ce projet, j'ai fais face à des difficultés qui ont nécessité une phase de réflexion pour trouver
                                une solution, mais aussi des phases de documentation pour comprendre certaines méthodes que je n'avais pas vu en cours dont la transition. <br />
                                Grâce à ça, j'ai appris à être plus autonome et à mieux concevoir une application. <br />
                            </p>
                        </div>
                        <figure className="droiteM">
                            <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"}  alt="Capture d'écran du jeu"></img>

                            <figcaption><a href="https://github.com/LegerTristan/MemoryFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                        </figure>
                    </div>

                    <div className="souvenangeM">
                        <div className="gaucheM">
                            <h2>Souvenange
                                <img src={process.env.PUBLIC_URL + "/icone/iconeReact.png"} alt=" : React, " className="outilSvngeM" title="Outil utilisé : React"/>
                                <img src={process.env.PUBLIC_URL + "/icone/iconeRedux.png"} alt=" Redux" className="outilSvnge" title="Outil utilisé : Redux"/>
                            </h2>

                            <p>Lors de ma deuxième année de DUT Informatique, je suis intervenu en tant que chef de projet
                                dans une équipe de 5 personnes, moi inclus. <br />
                                Dans le cadre d'un projet tuteuré, nous avons dû réaliser la refonte du site de l'association Souvenange,
                                une association qui accompagne les familles dans le deuil périnatal par la photographie.
                                En raison d'un augmentation constante du nombre de visiteurs sur leur site, nous avons dû procéder
                                à une amélioration graphique pour mieux guider les utilisateurs vers le formulaire de contact.<br />
                                Également, nous devions ajouter des fonctionnalités au site via l'outil React afin de faciliter la
                                communication entre la secrétaire de l'association et les bénévoles. <br />
                                Ce projet m'a beaucoup apporté aussi bien en savoir-faire, notamment par l'apprentissage d'un langage,
                                jamais vu en cours. <br />
                                Du coup, j'ai appris en autonomie et en autodidaxie, à travailler avec une technologie qui m'est inconnue
                                à réagir et à trouver des solutions face à des problèmes techniques qui peuvent me mettre en déroute. <br />
                                Enfin, diriger une équipe m'a offert une expérience unique, j'ai acquis un sens de l'organisation et
                                une meilleure de planification de projet grâce à la direction de ce projet pour un vrai client.
                            </p>
                        </div>
                        <figure className="droiteM">
                            <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.png"}  alt="Capture d'écran du site"></img>

                            <figcaption><a href="https://github.com/LegerTristan " target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                        </figure>
                    </div>
                </div>
            )}
        </div>
    )
}
