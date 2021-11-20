import React from 'react';
import'./Load.css'
const Load = (props) => {
    const{Name,des,image,num}=props.data;
    return (
      <div className="col">
        <div class="card">
        <img src="https://cdn.pixabay.com/photo/2018/04/22/18/20/technology-3341877_960_720.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{des}</p>
          <h1>{num}</h1>
          <button className="btn btn-success">Call Now</button>
        </div>
      </div>
      </div>
    );
};

export default Load;