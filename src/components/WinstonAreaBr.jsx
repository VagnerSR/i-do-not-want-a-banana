import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import './winstonArea.css';



const chillWinston = require('../assets/chillwinston.png')
const partyModeWinston = require('../assets/modofesta.png')
const winstonTalking = require('../assets/winstonfalando.png')


function WinstonArea() {
    const [winstonIMG, setWinstonIMG] = useState(chillWinston)

    const soundSrcBanana = require('../assets/naoquerobanana.mp3')
    const soundSrcParty = require('../assets/modofestaativado.mp3')


   

    useEffect(function () {
        setInterval(() => setWinstonIMG(chillWinston), 5000)
    }, [])



    const callMySoundBanana = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play()
    }

    const callMySoundParty = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play()
    }


    

    function iDoNotWantABanana() {
       
            callMySoundBanana(soundSrcBanana);
           
            setWinstonIMG(winstonTalking)
            
            console.log("Não, eu não quero uma banana.")
       

    }


    function partyMode() {

        callMySoundParty(soundSrcParty)

        setWinstonIMG(partyModeWinston)
    }

    

   

    

    return (
        <div className='winston-area'>

            <img onMouseUp={iDoNotWantABanana}
                
                
                className='winston-img'
                src={winstonIMG}
                alt="Winston" id='winston' />

            <button onClick={partyMode}
                className='party-mode'>Modo festa</button>

        </div>

    );
}

export default WinstonArea;