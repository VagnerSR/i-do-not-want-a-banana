import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import './winstonArea.css';



const chillWinston = require('../assets/chillwinston.png')
const partyModeWinston = require('../assets/partymode.png')
const winstonTalking = require('../assets/lwinstontalking.png')


function WinstonArea() {
    const [winstonIMG, setWinstonIMG] = useState(chillWinston)

    const soundSrc = require('../assets/nobanana.mp3')


   

    useEffect(function () {
        setInterval(() => setWinstonIMG(chillWinston), 5000)
    }, [])



    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play()
    }


    

    function iDoNotWantABanana() {
       
            callMySound(soundSrc);
           
            setWinstonIMG(winstonTalking)
            
            console.log("Não, eu não quero uma banana.")
       

    }

    

   

    

    return (
        <div className='winston-area'>

            <img onMouseUp={iDoNotWantABanana}
                
                
                className='winston-img'
                src={winstonIMG}
                alt="Winston" id='winston' />

            <button onClick={() => setWinstonIMG(partyModeWinston)}
                className='party-mode'>Party mode</button>

        </div>

    );
}

export default WinstonArea;