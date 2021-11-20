import React, { useState } from 'react';
import Data from '../Data/Data'
import Load from '../Load/Load';


const Help = () => {
    const[data,setData]= useState(Data);
 
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
       
         {     
             data.map(value=><Load data={value}></Load>)
        }
        </div>
   
    );
};

export default Help;