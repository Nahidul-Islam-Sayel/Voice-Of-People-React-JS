import React, { useState } from 'react';
import newsdata from '../Data/News';
import Newsload from '../Newsload/Newsload';
const News = () => {
    const[data,setdata]=useState(newsdata);
    console.log(data)
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
       
       {     
         data.map(data=><Newsload data={data}></Newsload>)
      }
      </div>
        </div>
    );
};

export default News;