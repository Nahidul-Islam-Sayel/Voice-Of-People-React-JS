import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import newsdata from '../Data/News'
import './Fullnews.css' 
const Fullnews = () => {
    const{id} = useParams();
     const[data,setData]= useState(newsdata);
     console.log(data);
   const news=   data.filter(data=>id == data.category);
     console.log(news[0].name);
    return (
        <div className="container-fluid xyz">
<img src={news[0].image} alt=""/>
<h1>{news[0].name}</h1>
    <p>{news[0].dea}</p>
   </div>
    );
};

export default Fullnews;