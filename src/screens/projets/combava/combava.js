import React from 'react';
import './combava.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Combava(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>Combava 
                <img src={process.env.PUBLIC_URL + "/icone/iconeHTML5_CSS3.jpg"} alt=" : HTML5 et CSS3 " className="outilCombava" title="Outil utilisé : HTML5 et CSS3"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"}  alt="Combava" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/Combava" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>

                    <h3>Présentation</h3>

                    <p>Ce projet consistait à réaliser un site vitrine concernant la citronnade de David's Lemonade. <br />
                        David's Lemonade est une entreprise fictive qui mets en avant la citronnade produit par des locaux 
                        et dont l'ambiance et le goût rappelle les citronnades vendues par les enfants en Amérique afin de se faire de l'argent de poche.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Ce projet a été réalisé en duo avec un camarade de ma promotion. <br />
                        Il y a d'abord eu une phase de réflexion sur l'aspect visuel de notre site notamment par le biais de personna qui nous ont 
                        permis de mieux appréhender les attentes d'un éventuel utilisateur qui passe sur le site. <br />
                        Les outils à notre disposition n'était exclusivement que l'HTML5 et le CSS3, il nous fallait organiser 
                        efficacement notre site, notamment par un squelette qui reprenait nos éléments principaux. <br />
                        Enfin, nous avons décoré et mis en place le menu de notre site vitrine en nous adaptant également au 
                        responsive design.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Ce projet a été l'occasion d'élaborer des personnas et de créer une version responsive 
                        design pour la première fois <br />
                        Ça a été un peu compliqué d'imaginer des personnas au début et de comprendre les besoins que pourrait avoir 
                        les utilisateurs sans qu'ils nous le disent mais ce projet a été un bon entraînement. <br />
                        J'ai appris, via ce projet, à réaliser mon site pour qu'il soit d'abord responsive, puis également à rédiger 
                        les personnas, à comprendre les besoins d'un utilisateur afin que celui-ci trouve ce qu'il souhaite quand il vient sur le site.<br />
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"}  alt="Combava" />
                        <figcaption><a href="https://github.com/LegerTristan/Combava" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    
                    <h3>Présentation</h3>

                    <p>Ce projet consistait à réaliser un site vitrine concernant la citronnade de David's Lemonade. <br />
                        David's Lemonade est une entreprise fictive qui mets en avant la citronnade produit par des locaux 
                        et dont l'ambiance et le goût rappelle les citronnades vendues par les enfants en Amérique afin de se faire de l'argent de poche.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Ce projet a été réalisé en duo avec un camarade de ma promotion. <br />
                        Il y a d'abord eu une phase de réflexion sur l'aspect visuel de notre site notamment par le biais de personnas qui nous ont 
                        permis de mieux appréhender les attentes d'un éventuel utilisateur qui passe sur le site. <br />
                        Les outils à notre disposition n'étaient exclusivement que l'HTML5 et le CSS3, il nous fallait organiser 
                        efficacement notre site, notamment par un squelette qui reprenait nos éléments principaux. <br />
                        Enfin, nous avons décoré et mis en place le menu de notre site vitrine en nous adaptant également au 
                        responsive design.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Ce projet a été l'occasion d'élaborer des personnas et de créer une version responsive 
                        design pour la première fois <br />
                        Ça a été un peu compliqué d'imaginer des personnas au début et de comprendre les besoins que pourrait avoir 
                        les utilisateurs sans qu'ils nous le disent mais ce projet a été un bon entraînement. <br />
                        J'ai appris, via ce projet, à réaliser mon site pour qu'il soit d'abord responsive, puis également à rédiger 
                        les personnas, à comprendre les besoins d'un utilisateur afin que celui-ci trouve ce qu'il souhaite quand il vient sur le site.<br />
                    </p>
                </div>
            )}
        </div>
    )
}
