import React from 'react';

import { Routes, Route } from "react-router-dom";
import ContentBR from './Contentbr';
import ContentEng from './Contenteng';


function Content() {


    return (
        <div className="content">

               <Routes>
               
               <Route path="/i-do-not-want-a-banana/eng" element={<ContentEng />} />
               <Route path="/i-do-not-want-a-banana/pt" element={<ContentBR />} />
               <Route path="/i-do-not-want-a-banana/" element={<ContentEng />} />
               <Route path="/" element={<ContentEng />} />

               </Routes>
        </div>
    );
}

export default Content;