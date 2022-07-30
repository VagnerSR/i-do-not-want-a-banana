import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import './winstonArea.css';



const chillWinston = require('../assets/chillwinston.png')
const partyModeWinston = require('../assets/partymode2.png')
const winstonTalking = require('../assets/lwinstontalking.png')


function WinstonArea() {
    const [winstonIMG, setWinstonIMG] = useState(chillWinston)

    const soundSrcBanana = require('../assets/nobanana.mp3')
    const soundSrcParty = require('../assets/partymode.mp3')


   

    useEffect(function () {
        setInterval(() => setWinstonIMG(chillWinston), 5000)
    }, [winstonIMG])



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
                className='party-mode'>Party mode</button>

        </div>

    );
}

export default WinstonArea;