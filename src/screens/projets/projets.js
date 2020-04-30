import React from 'react';
import './projets.css';

import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function Projets(){
    const matches = useMediaQuery('(min-width:1280px)');
    return(
        <div className="containerProjets">
            {matches && (
                <div>
                    <div class="line">
                        <Link to="/souvenange">
                            <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"} alt="Souvenange"/>
                            <p>Souvenange</p>
                        </Link>
                        <Link to="/memoryfx">
                            <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"} alt="MemoryFX"/>
                            <p>MemoryFX</p>
                        </Link>
                        <Link to="/dicofx">
                            <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.png"} alt="DicoFX"/>
                            <p>DicoFX</p>
                        </Link>
                        <Link to="/wroom">
                            <img src={process.env.PUBLIC_URL + "/images/wroom_visuel.png"} alt="Wroom"/>
                            <p>Wroom</p>
                        </Link>
                    </div>
                    <div class="line"> 
                        <Link to="/onlinejudge">
                            <img src={process.env.PUBLIC_URL + "/images/onlinejudge_visuel.jpg"} alt="OnlineJudge"/>
                            <p>Online Judge</p>
                        </Link>
                        <Link to="/combava">
                            <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"} alt="Combava"/>
                            <p>Combava</p>    
                        </Link>
                        <Link to="/biblio">
                            <img src={process.env.PUBLIC_URL + "/images/biblio_visuel.jpg"} alt="Bibliothèque"/>
                            <p>Bibliothèque</p>
                        </Link>
                    </div>
                </div>
            )}

            {!matches && (
                <div className="mobile">
                    <Link to="/souvenange">
                        <img src={process.env.PUBLIC_URL + "/images/souvenange_visuel.jpg"} alt="Souvenange"/>
                        <p>Souvenange</p>
                    </Link>
                    <Link to="/memoryfx">
                        <img src={process.env.PUBLIC_URL + "/images/memoryFX_visuel.png"} alt="MemoryFX"/>
                        <p>MemoryFX</p>
                    </Link>
                    <Link to="/dicofx">
                        <img src={process.env.PUBLIC_URL + "/images/dicoFX_visuel.png"} alt="DicoFX"/>
                        <p>DicoFX</p>
                    </Link>
                    <Link to="/wroom">
                        <img src={process.env.PUBLIC_URL + "/images/wroom_visuel.png"} alt="Wroom"/>
                        <p>Wroom</p>
                    </Link>
                    <Link to="/onlinejudge">
                        <img src={process.env.PUBLIC_URL + "/images/onlinejudge_visuel.jpg"} alt="OnlineJudge"/>
                        <p>Online Judge</p>
                    </Link>
                    <Link to="/combava">
                        <img src={process.env.PUBLIC_URL + "/images/combava_visuel.png"} alt="Combava"/>
                        <p>Combava</p>    
                    </Link>
                    <Link to="/biblio">
                        <img src={process.env.PUBLIC_URL + "/images/biblio_visuel.jpg"} alt="Bibliothèque"/>
                        <p>Bibliothèque</p>
                    </Link>
                </div>
            )}
        </div>
    )
}
