import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa'



function Footer() {
    return (
        <footer className='footerzada'>
            
        
                <h2 className='footerzada-titulo'>Winston is an Overwatch character, to learn more about it go to  
                <a className='footerzada-link' href='https://playoverwatch.com/'> https://playoverwatch.com/</a>.
                </h2>
            

                <p className='footerzada-text'>Feed Winston was created by Vagner Rosnoski.   <a className='footerzada-git footerzada-link' href='https://leekspin.ytmnd.com/'><FaGithub  /></a></p> 
                

            
        </footer>
    );
}

export default Footer;