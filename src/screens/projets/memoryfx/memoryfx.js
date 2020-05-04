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
                    
                    <h3>Présentation</h3>

                    <p>MemoryFX est tout simplement un memory, un jeu de mémoire où le but est de retrouver toutes les pairs avec le nombre de coups le plus minime possible. <br />
                        J'ai réalisé ce projet avec la bibliothèque JavaFX lors des vacances d'été 2019 dans le but de me challenger, seul, sur le développement
                        d'une petite application, notamment en passant par sa conception.
                    </p>

                    <h3>Fonctionnement du projet</h3>

                    <p>L'application est divisée en 3 scènes : le menu, la scène de jeu, l'écran de fin de partie. <br />
                        Le menu contient des écouteurs sur chaque bouton afin de lancer une partie ou quitter l'application. <br />
                        Une fois la partie lancée, une liste de 12 cartes est générée. Chaque carte possède une couleur qui lui est attribué aléatoirement et indépendamment de chaque carte. <br />
                        Étant donné que les cartes héritent de la classe Rectangle de JavaFX, elles possèdent un écouteur sur chacune d'elle, pour être retournée ou non lors d'un clic du joueur. <br />
                        Lorsque deux cartes sont retournées, on vérifie si elles sont identiques puis on suit le principe d'un Memory. <br />
                        Un score est déterminé à partir du nombre de paires trouvées + l'enchaînement de pair trouvée - le nombre de coups nécessaires. <br />
                        L'enchaînement de pair trouvée est calculé par le biais d'un multiplicateur qui croît en fonction du nombre de paires trouvées d'affilée. <br />

                        Une fois toutes les pairs obtenues, l'écran de fin de partie apparaît avec le score final ainsi qu'un bouton "Rejouer". Les scores précédents ne sont pas sauvegardés. <br />  
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>J'ai donc développé une première version du projet en suivant le pattern MVC dans laquelle on peut donc jouer,
                        déterminer le nombre de "coups" nécessaire pour finir la partie et, enfin, calculer le score du joueur. <br />
                        J'ai, par la suite, refactoré l'application afin de simplifier la génération des cartes. <br />
                        En effet, celle-ci était bien plus compliqué et nécessitait l'appel de fonction statique ce qui n'était pas bon pour mon code. <br />
                        J'ai donc fais-en sorte que les cartes soient toutes positionnées au préalable avec un id précis et que seule la couleur varie, 
                         à l'inverse de la version précédente ou chaque carte avait une couleur précise mais que la carte n'avait pas toujours la même position.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Ce projet m'a permis de rassembler l'ensemble des connaissances en conception et en programmation
                        que j'ai obtenu au cours de ma première année. <br />
                        En outre, lors de ce projet, j'ai fais face à des difficultés qui ont nécessité une phase de réflexion pour trouver
                        une solution, mais aussi des phases de documentation pour comprendre certaines méthodes que je n'avais pas vu en cours dont la transition. <br />
                        Cette phase de conception m'a aussi entraîné à mieux cerner mes fonctionnalités et leur implémentation dans mon code, et indirectement, à critiquer 
                        mon propre code et déceler les erreurs mineurs (du Code smell en génie logiciel) qui ont été refactorées. <br />
                        Grâce à ça, j'ai appris à être plus autonome et minutieux lors de la conception et l'implémentation d'une application. <br />
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"}  alt="Un ange" />
                    </figure>

                    <h3>Présentation</h3>

                    <p>MemoryFX est tout simplement un memory, un jeu de mémoire où le but est de retrouver toutes les pairs avec le nombre de courps le plus minime possible. <br />
                        J'ai réalisé ce projet avec la bibliothèque JavaFX lors des vacances d'été 2019 dans le but de me challenger, seul, sur le développement
                        d'une petite application, notamment en passant par sa conception.
                    </p>

                    <h3>Fonctionnement du projet</h3>

                    <p>L'application est divisée en 3 scènes : le menu, la scène de jeu, l'écran de fin de partie. <br />
                        Le menu contient des écouteurs sur chaque bouton afin de lancer une partie ou quitter l'application. <br />
                        Une fois la partie lancée, une liste de 12 cartes est générée. Chaque carte possède une couleur qui lui est attribué aléatoirement et indépendamment de chaque carte. <br />
                        Étant donné que les cartes héritent de la classe Rectangle de JavaFX, elles possèdent un écouteur sur chacune d'elle, pour être retournée ou non lors d'un clic du joueur. <br />
                        Lorsque deux cartes sont retournées, on vérifie si elles sont identiques puis on suit le principe d'un Memory. <br />
                        Un score est déterminé à partir du nombre de paires trouvées + l'enchaînement de pair trouvée - le nombre de coups nécessaires. <br />
                        L'enchaînement de pair trouvée est calculé par le biais d'un multiplicateur qui croît en fonction du nombre de paires trouvées d'affilée. <br />

                        Une fois toutes les pairs obtenues, l'écran de fin de partie apparaît avec le score final ainsi qu'un bouton "Rejouer". Les scores précédents ne sont pas sauvegardés. <br />  
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>J'ai donc développé une première version du projet en suivant le pattern MVC dans laquelle on peut donc jouer,
                        déterminer le nombre de "coups" nécessaire pour finir la partie et, enfin, calculer le score du joueur. <br />
                        J'ai, par la suite, refactoré l'application afin de simplifier la génération des cartes. <br />
                        En effet, celle-ci était bien plus compliqué et nécéssitait l'appel de fonction statique ce qui n'était pas bon pour mon code. <br />
                        J'ai donc fais en sorte que les cartes soient toutes positionnées au préalable avec un id précis et que seule la couleur varie, 
                         à l'inverse de la version précédente ou chaque carte avait une couleur précise mais que la carte n'avait pas toujours la même position.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Ce projet m'a permis de rassembler l'ensemble des connaissances en conception et en programmation
                        que j'ai obtenu au cours de ma première année. <br />
                        En outre, lors de ce projet, j'ai fais face à des difficultés qui ont nécessité une phase de réflexion pour trouver
                        une solution, mais aussi des phases de documentation pour comprendre certaines méthodes que je n'avais pas vu en cours dont la transition. <br />
                        Cette phase de conception m'a aussi entraîné à mieux cerner mes fonctionnalités et leur implémentation dans mon code, et indirectement, à critiquer 
                        mon propre code et déceler les erreurs mineurs (du Code smell en génie logiciel) qui ont été refactorées. <br />
                        Grâce à ça, j'ai appris à être plus autonome et minutieux lors de la conception et l'implémentation d'une application. <br />
                    </p>
                </div>
            )}
        </div>
    )
}
