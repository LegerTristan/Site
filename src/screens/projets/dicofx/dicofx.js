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
                            <img src={process.env.PUBLIC_URL + "/images/dicofx_visuel.png"}  alt="DicoFX" className="imgOJ" />
                            <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                    Développé seul en JavaFX durant les vacances d'été 2019. <br />
                    Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                    Également, j'ai pu concevoir des fonctionnalités un peu plus compliqué et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />  
                    </p>
                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/dicofx_visuel.png"}  alt="DicoFX" />
                        <figcaption><a href="https://github.com/LegerTristan/DicoFX" target="_blank" rel="noopener noreferrer">Télécharger le projet sur GitHub</a></figcaption>
                    </figure>
                    <p>Dictionnaire où l'on saisit ces définitions et on peut les réviser via un système de note. <br />
                    Développé seul en JavaFX durant les vacances d'été 2019. <br />
                    Comme le projet MemoryFX, celui-ci m'a permis de mettre en pratique mes acquis durant ma première année de DUT Informatique <br />
                    Également, j'ai pu concevoir des fonctionnalités un peu plus compliqué et établir par moi-même un algorithme pour résoudre des problèmes plus contraignants. <br />  
                    </p>
                </div>
            )}
        </div>
    )
}
