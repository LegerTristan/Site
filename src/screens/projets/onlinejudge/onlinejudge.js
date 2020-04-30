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
                    <p>Divers problèmes disponible sur le site UVAJudge réalisé en Python durant ma seconde année de DUT Informatique. <br />
                        J'ai ainsi pu apprendre le langage Python et maîtriser les bases nécessaires pour pouvoir développer aisément avec ce langage. <br />
                        Tout les exercices que j'ai réalisé ou entamés sont disponible sur mon GitHub. 
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/onlinejudge_visuel.jpg"}  alt="OnlineJudge" />
                        <figcaption><a href="https://github.com/LegerTristan/OnlineJudge" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Divers problèmes disponible sur le site UVAJudge réalisé en Python durant ma seconde année de DUT Informatique. <br />
                        J'ai ainsi pu apprendre le langage Python et maîtriser les bases nécessaires pour pouvoir développer aisément avec ce langage. <br />
                        Tout les exercices que j'ai réalisé ou entamés sont disponible sur mon GitHub. 
                    </p>
                </div>
            )}
        </div>
    )
}
