import React from 'react';
import './Container.css';
import WinstonArea from './WinstonArea';
import BananaArea from './BananaArea';



function Container() {




  return (
    <div className='container'>

      <WinstonArea />
      <BananaArea />
      <BananaArea />
      <BananaArea />
     
    </div>
  );
}

export default Container;