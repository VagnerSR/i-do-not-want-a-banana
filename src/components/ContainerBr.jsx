import React from 'react';
import './Container.css';
import WinstonAreaBr from './WinstonAreaBr';
import BananaArea from './BananaArea';



function ContainerBr() {




  return (
    <div className='container'>

      <WinstonAreaBr />
      <BananaArea />
      <BananaArea />
      <BananaArea />
     
    </div>
  );
}

export default ContainerBr;