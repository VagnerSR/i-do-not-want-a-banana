import React from 'react';
import './languageMenu.css';
import { Link } from "react-router-dom";



function LanguageMenu() {
    return (
        <div className='language-area'>
            <button className='language-buton'><Link to="/eng">English</Link></button> 
            <button className='language-buton'><Link to="/pt">Português</Link></button>  
                   
        </div>
    );
}

export default LanguageMenu;