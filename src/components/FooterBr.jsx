import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa'



function FooterBr() {
    return (
        <footer className='footerzada'>
            
        
                <h2 className='footerzada-titulo'>Winston é um personagem de Overwatch, para saber mais sobre ele acesse  
                <a className='footerzada-link' href='https://playoverwatch.com/'> https://playoverwatch.com/</a>.
                </h2>
            

                <p className='footerzada-text'>Feed Winston foi criado por Vagner Rosnoski.   <a className='footerzada-git footerzada-link' href='https://leekspin.ytmnd.com/'><FaGithub  /></a></p> 
                

            
        </footer>
    );
}

export default FooterBr;