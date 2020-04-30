import React from 'react';
import './memoryfx.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function MemoryFX(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>MemoryFX <img src={process.env.PUBLIC_URL + "/icone/iconeJFX.png"} alt=" : JavaFX" title="Outil utilisé : JavaFX"/></h2>

            {matches && (
                <div className="visuelLien">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"}  alt="Capture d'écran du jeu" />
                        <figcaption><a href="https://github.com/LegerTristan/MemoryFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
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
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"}  alt="Capture d'écran du jeu" />
                        <figcaption><a href="https://github.com/LegerTristan/MemoryFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
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
            )}
        </div>
    )
}
