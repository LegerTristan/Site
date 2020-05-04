import React from 'react';
import './onlinejudge.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function OnlineJudge(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>OnlineJudge 
                <img src={process.env.PUBLIC_URL + "/icone/iconePython.jpg"} alt=" : Python " className="outilOJ" title="Outil utilisé : Python"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/onlinejudge_visuel.jpg"}  alt="OnlineJudge" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/OnlineJudge" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>

                    <h3>Présentation</h3>

                    <p>Divers problèmes disponibles sur le site UVAJudge réalisé en Python durant ma seconde année de DUT Informatique. <br />
                        Une fois les problèmes réalisés, je devais les soumettre à un juge afin de vérifier que tous les cas possibles sont traités, 
                        qu'il n'y a pas d'erreur de compilation, que le temps d'exécution du programme est bon etc. <br />
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>J'ai ainsi pu apprendre le langage Python et maîtriser les bases nécessaires pour pouvoir développer aisément avec ce langage. <br />
                        Ces problèmes m'ont donc permis d'apprendre à utiliser les différentes structures proposées par Python comme la pile, la file ou encore le dictionnaire. <br />
                        J'ai vu aussi comment réaliser des fonctions et les appeler. <br />
                        En plus de ça, réaliser plusieurs exercices à la suite m'a entraîné à mieux analyser des problèmes, et les résoudre avec plus de rigueur.
                    </p>

                    <p>Tous les exercices que j'ai réalisés ou entamés sont disponible sur mon GitHub. </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/onlinejudge_visuel.jpg"}  alt="OnlineJudge" />
                        <figcaption><a href="https://github.com/LegerTristan/OnlineJudge" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>
                        
                    </p>
                </div>
            )}
        </div>
    )
}
