import React from 'react';
import './Account.css'
import { FaFacebook , FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Account = () => {
    return (
        <div>
           <form className='form'>
               <h2 className="skill-title title">Sing Up</h2>
  <div className="mb-3">
    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
   
    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
   
   <input type="password" placeholder="Confirm Password" className="form-control" id="exampleInputPassword1"/>
 </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <h5 className="skill-title title">OR</h5>
  <button id="button"className="btn btn-success"><FaGoogle/>Log In With Google</button><br/><br/>
  <button id="button" className="btn btn-success"><FaFacebook/>Log In With Facebook</button>
 <br/>
 <p>I have Alrady Account<Link to="/login">Login Now</Link></p> 
</form> 
        </div>
    );
};

export default Account;