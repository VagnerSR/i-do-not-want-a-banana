import React from 'react';
import FooterBr from './FooterBr';
import Header from './Header';
import TextBr from './TextBr';
import ContainerBr from './ContainerBr';



function ContentBR() {
    return (
        <div>
            <Header />
            <TextBr />
            <ContainerBr />
            <FooterBr />
        </div>
    );
}

export default ContentBR;