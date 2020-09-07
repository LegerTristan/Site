import React from 'react';
import './formations.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Formations(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerFormations">
            {matches && (
                <div>
                    <div className="iut">
                        <div className="gauche">
                            <h2>DUT Informatique à l'IUT du Limousin</h2>

                            <p>Lors de mon DUT Informatique, j'ai appris les bases de l'informatique de plusieurs langages de programmation tels que
                                le Java, le C++, et toutes les technologies liées au Web, c'est-à-dire HTML, CSS et JS. <br />
                                Ma formation m'a également permis d'appliquer mes compétences au cours de divers projets en y ajoutant de la méthodologie,
                                et de la gestion de projet. <br />
                                En effet, grâce aux méthodes agiles et à la réalisation de gestion de projet via des Gantt, des diagrammes de Use Case etc,
                                j'ai acquis la rigueur nécessaire pour planifier et concevoir un produit demandé par un client par exemple.
                            </p>
                        </div>
                        <figure className="droiteFrm">
                            <img src={process.env.PUBLIC_URL + "/images/lgIUT.jfif"}  alt="Logo de l'IUT du Limousin" />

                            <figcaption>2018-2020 Limoges, 87000, France</figcaption>
                        </figure>
                    </div>

                    <div className="lycee">
                        <div className="gauche">
                            <h2>Baccalauréat scientifique au Lycée Jean-Baptiste Darnet</h2>

                            <p>J'ai obtenu mon Baccalauréat scientifique avec la mention assez bien en 2018. <br />
                                La filière scientifique m'a permis d'acquérir les bases de la physique et les notions de mathématiques
                                nécessaires pour concevoir des logiciels qui requiert des principes et des règles pour un environnement, une simulation etc. <br />
                                L'ensemble des matières étudiés durant ce cursus m'ont offert une culture générale correcte et des bases solides pour poursuivre
                                mes études. <br />
                            </p>
                        </div>
                        <figure className="droiteFrm">
                            <img src={process.env.PUBLIC_URL + "/images/logoJB.jfif"}  alt="Lycée Jean-Baptiste Darnet" />

                            <figcaption>2016-2018 Saint-Yrieix la Perche, 87500, France</figcaption>
                        </figure>
                    </div>
                </div>
            )}

            {!matches && (
                <div>
                    <div className="iutM">
                        <div className="gaucheM">
                            <h2>DUT Informatique à l'IUT du Limousin</h2>

                            <p>Lors de mon DUT Informatique, j'ai appris les bases de l'informatique de plusieurs langages de programmation tels que
                                le Java, le C++, et toutes les technologies liés au Web, c'est-à-dire HTML, CSS et JS. <br />
                                Ma formation m'a également permis d'appliquer mes compétences au cours de divers projets en y ajoutant de la méthodologie,
                                et de la gestion de projet. <br />
                                En effet, grâce aux méthodes agiles et à la réalisation de gestion de projet via des Gantt, des diagrammes de Use Case etc,
                                j'ai acquis la rigueur nécessaire pour planifier et concevoir un produit demandé par un client par exemple.
                            </p>
                        </div>
                        <figure className="droiteFrm-M">
                            <img src={process.env.PUBLIC_URL + "/images/lgIUT.jfif"}  alt="Logo de l'IUT du Limousin" />

                            <figcaption>2018-2020 Limoges, 87000, France</figcaption>
                        </figure>
                    </div>

                    <div className="lyceeM">
                        <div className="gaucheM">
                            <h2>Baccalauréat scientifique au Lycée Jean-Baptiste Darnet</h2>

                            <p>J'ai obtenu mon Baccalauréat scientifique avec la mention assez bien en 2018. <br />
                                La filière scientifique m'a permis d'acquérir les bases de la physique et les notions de mathématiques
                                nécessaire pour concevoir des logiciels qui requiert des principes et des règles pour un environnement, une simulation etc. <br />
                                L'ensemble des matières étudiés durant ce cursus m'ont offert une culture générale correcte et des bases solides pour poursuivre
                                mes études. <br />
                            </p>
                        </div>
                        <figure className="droiteFrm-M">
                            <img src={process.env.PUBLIC_URL + "/images/logoJB.jfif"}  alt="Lycée Jean-Baptiste Darnet" />

                            <figcaption>2016-2018 Saint-Yrieix la Perche, 87500, France</figcaption>
                        </figure>
                    </div>
                </div>
            )}
        </div>
    )
}
