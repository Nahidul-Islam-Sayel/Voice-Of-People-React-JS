import React from 'react';
import { Link } from 'react-router-dom';

const Newsload = (props) => {
    const{name,dis,image, category}=props.data;
    return (
        <div className="col">
        <div class="card">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{dis}</p>
        
         <Link to={"/news/"+category}> <button className="btn btn-success">Loarn More</button></Link>
    
        
        </div>
      </div>
      </div>
    );
};

export default Newsload;