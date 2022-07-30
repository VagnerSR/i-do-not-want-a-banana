import React, { useRef } from 'react';
import './languageMenu.css';
import { Link } from "react-router-dom";
import { MdTranslate } from "react-icons/md";
import { useState } from 'react';



function LanguageMenu() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <div className='topHead'>
            <div className='menu-container'>
                <button onClick={onClick} className="menu-button">
                    <MdTranslate />
                </button>

                <nav ref={dropDownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}>
                    <ul className='language-buton'>
                        <li className='language-buton-item'><Link to="/eng">English</Link></li>
                        <li className='language-buton-item'><Link to="/pt">Português</Link></li>
                    </ul>
                </nav>
            </div>

            
            <div className='title-container'>
                <h1 className='headerzada-title'>FEED WINSTON</h1>
            </div>

            <div className='troll'></div>

        </div>
    );
}

export default LanguageMenu;