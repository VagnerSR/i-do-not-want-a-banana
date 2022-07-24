import React from 'react';

import { Routes, Route } from "react-router-dom";
import ContentBR from './Contentbr';
import ContentEng from './Contenteng';


function Content() {


    return (
        <div className="content">

               <Routes>
               
               <Route path="/eng" element={<ContentEng />} />
               <Route path="/pt" element={<ContentBR />} />
               <Route path="/" element={<ContentEng />} />

               </Routes>
        </div>
    );
}

export default Content;