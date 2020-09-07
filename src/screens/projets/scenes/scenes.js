import React from 'react';
import './scenes.css';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Scenes(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerTheProjet">
            <h2>Scène 
                <img src={process.env.PUBLIC_URL + "/icone/iconeUE.png"} alt=" : Unreal Engine 4" className="outilUE" title="Outil utilisé : Unreal Engine 4"/>
            </h2>
            {matches && (
                <div className="visuelLien">
                    <figure>
                            <img src={process.env.PUBLIC_URL + "/images/scenes_visuel.png"}  alt="Soleil couchant sur une montagne" className="imgScene" />
                    </figure>

                    <h3>Présentation</h3>

                    <p>Lors de l'été 2020, j'ai décidé de prendre en main l'un des moteurs de jeu les plus célèbres : Unreal Engine 4. <br />
                        Unreal Engine 4 permet, entre autres, de créer des jeux-vidéos, des films, 
                        de réaliser une présentation marketing ou encore l'architecture d'un lieu. <br />
                        Dans le cadre de mon projet professionnel, j'ai suivi un cours pour apprendre à me servir du moteur et, 
                        à la fin de ce cours, j'ai eu l'occasion de produire une scène grâce aux divers outils que proposent Unreal Engine, 
                        notamment la pose procédurale et le contrôle de la lumière indirecte.
                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Afin d'obtenir ce rendu, il a fallu dans un premier temps que je crée les matériaux qui allaient recouvrir 
                        le terrain, à cela j'ai ajouté un système de végétation automatique. <br />
                        Une fois mes matériaux réalisés, j'ai téléchargé le terrain qui était le seul élément préfait qui était fourni 
                        par le cours et j'ai peint dessus mes matériaux afin d'obtenir le sol de ma scène. <br />
                        Via la pose procédurale, j'ai défini les arbres qui allaient peuplés ma scène selon le sol sur lequel 
                        ils allaient se trouvaient. <br />
                        Une fois l'environnement crée, il a fallu dans un deuxième temps mettre en place la lumière et y ajouter 
                        un brouillard volumétrique qui n'est que légèrement visible dans le fond de la scène afin de ne pas 
                        gâcher la lumière. <br />
                        Une fois la lumière et le brouillard positionnés, j'ai dû travailler les ombres qui étaient trop fortes et 
                        rendaient certains éléments trop sombre. Pour cela, il a fallu avec la lumière indirecte afin que celle-ci 
                        éclaircisse les ombres de mon environnement.<br />
                        Enfin, il a fallu configurer quelques détails sur la caméra pour peaufiner les derniers détails.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Unreal Engine est un moteur extrêmement performant et permet de réaliser beaucoup de projets, 
                        notamment grâce à son incroyable communauté et à son marketplace conséquent (site sur lequel on peut obtenir des éléments 
                        graphiques, sonores ou algorithmiques pour embellir son projet). <br />
                        En outre, au travers de cette scène, j'ai pu aborder la plupart des aspects du moteur que ce soit la création de matériaux 
                        ou les effets de lumières et de caméra, en passant pour la sculpture du terrain. <br />
                        J'ai ainsi acquis des bases solides avec l'outil mais également sur le traitement de certaines mécaniques dans le jeux-vidéos, 
                        le seul bémol que je retiens est de ne pas avoir pu aborder la programmation C++ pour Unreal Engine vu qu'elle n'était 
                        pas nécessaire pour ce projet, je me suis donc contenté du Blueprint (un outil de script visuel présent par défaut). <br />
                        Le Blueprint offre une prise en main de la programmation vraiment top, mais il n'est pas assez poussé en ce qui 
                        concerne l'optimisation du projet, ce qui conduit parfois à des ralentissements qui brisent le rythme du jeu, c'est 
                        donc un point sur lequel je compte m'intéresser durant les prochains semaines.
                    </p>

                </div>
            )}

            {!matches && (
                <div className="visuelLienM">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/images/scenes_visuel.png"}  alt="Soleil couchant sur une montagne" />
                    </figure>
                    
                    <h3>Présentation</h3>

                    <p>Lors de l'été 2020, j'ai décidé de prendre en main l'un des moteurs de jeu les plus célèbres : Unreal Engine 4. <br />
                        Unreal Engine 4 permet, entre autres, de créer des jeux-vidéos, des films, 
                        de réaliser une présentation marketing ou encore l'architecture d'un lieu. <br />
                        Dans le cadre de mon projet professionnel, j'ai suivi un cours pour apprendre à me servir du moteur et, 
                        à la fin de ce cours, j'ai eu l'occasion de produire une scène grâce aux divers outils que proposent Unreal Engine, 
                        notamment la pose procédurale et le contrôle de la lumière indirecte.

                    </p>

                    <h3>Déroulement du projet</h3>

                    <p>Afin d'obtenir ce rendu, il a fallu dans un premier temps que je crée les matériaux qui allaient recouvrir 
                        le terrain, à cela j'ai ajouté un système de végétation automatique. <br />
                        Une fois mes matériaux réalisés, j'ai téléchargé le terrain qui était le seul élément préfait qui était fourni 
                        par le cours et j'ai peint dessus mes matériaux afin d'obtenir le sol de ma scène <br />
                        Via la pose procédurale, j'ai défini les arbres qui allaient peuplés ma scène selon le sol sur lequel 
                        ils allaient se trouvaient. <br />
                        Une fois l'environnement crée, il a fallu dans un deuxième temps mettre en place la lumière et y ajouter 
                        un brouillard volumétrique qui n'est que légèrement visible dans le fond de la scène afin de ne pas 
                        gâcher la lumière. <br />
                        Une fois la lumière et le brouillard positionnés, j'ai dû travailler les ombres qui étaient trop fortes et 
                        rendaient certains éléments trop sombre. Pour cela, il a fallu avec la lumière indirecte afin que celle-ci 
                        éclaircisse les ombres de mon environnement.<br />
                        Enfin, il a fallu configurer quelques détails sur la caméra pour peaufiner les derniers détails.
                    </p>

                    <h3>Ce que j'ai appris</h3>

                    <p>Unreal Engine est un moteur extrêmement performant et permet de réaliser beaucoup de projets, 
                        notamment grâce à son incroyable communauté et à son marketplace conséquent (site sur lequel on peut obtenir des éléments 
                        graphiques, sonores ou algorithmiques pour embellir son projet). <br />
                        En outre, au travers de cette scène, j'ai pu aborder la plupart des aspects du moteur que ce soit la création de matériaux 
                        ou les effets de lumières et de caméra, en passant pour la sculpture du terrain. <br />
                        J'ai ainsi acquis des bases solides avec l'outil mais également sur le traitement de certaines mécaniques dans le jeux-vidéos, 
                        le seul bémol que je retiens est de ne pas avoir pu aborder la programmation C++ pour Unreal Engine vu qu'elle n'était 
                        pas nécessaire pour ce projet, je me suis donc contenté du Blueprint (un outil de script visuel présent par défaut). <br />
                        Le Blueprint offre une prise en main de la programmation vraiment top, mais il n'est pas assez poussé en ce qui 
                        concerne l'optimisation du projet, ce qui conduit parfois à des ralentissements qui brisent le rythme du jeu, c'est 
                        donc un point sur lequel je compte m'intéresser durant les prochains semaines.
                    </p>
        
                </div>
            )}
        </div>
    )
}
