import React from 'react';
import './Home.css'
import {FaLinkedin, FaTumblr ,FaFacebook , FaAngellist , FaOdnoklassniki , FaStudiovinari , FaTheRedYeti} from "react-icons/fa";
const Home = () => {
    return (
        <div>
            <header className="header">
      <div className="banner">
        <h3 className="banner-subtitle">Voice Of People</h3>
        <h1 className="banner-title">আজ কথাবলবো সুন্দর আগামীর জন্য</h1>
      </div>
    </header>
    <div className="content-divider"></div>
   
    <section className="skills clearfix">
      <article className="skill">
        <span className="skill-icon">
        <FaAngellist/>
        </span>
        <h3 className="skill-title">আমার প্রতিবাদ</h3>
        <p className="skill-text">
          যদি প্রতিবাদী নিশ্চুপ থাকে এবং কোনো কথা না বলে তবে আদালত তো ভাববেই সে দোষী।
          
        </p>
      </article>
      <article className="skill">
        <span className="skill-icon">
         <FaOdnoklassniki/>
        </span>
        <h3 className="skill-title">আমার দায়িত্ব</h3>
     
        <p className="skill-text">
          যখন অনিয়ম, দুর্নীতি একটা আইন হয়ে যায়, সেই মুহূর্তে প্রতিবাদ করা একটা দায়িত্ব বনে যায়।
      
        </p>
      </article>
      <article className="skill">
        <span className="skill-icon">
          <FaStudiovinari/>
        </span>
        <h3 className="skill-title">শান্তি প্রতিষ্ঠা করবো</h3>
        <p className="skill-text">
          প্রতিবাদ কখনোই শান্তির জন্য বিরক্তিকর নয়। বরং অনিয়ম, দুর্নীতি, ও যুদ্ধ হলো শান্তির জন্য হুমকি।
        </p>
      </article>
      <article className="skill">
        <span className="skill-icon">
         <FaTheRedYeti/>
        </span>
        <h3 className="skill-title">সুন্দর আগামীর জন্য</h3>
        <p className="skill-text">
          আমার প্রতিবাদ এর মাধ্যমে করবো সমাজকে পরিবর্তন, অন্যায়মুক্ত সমাজ গড়বো, গড়বো সুন্দর আগামী, সুন্দর বাংলাদেশ, 
          
        </p>
      </article>
    </section> 
    <footer className="footer">
      <div className="section-center">
        <div className="social-icons">
      
          <a href="#" className="social-icon">
            <FaFacebook/>
          </a>
         
          <a href="#" className="social-icon">
            <FaTumblr/>
          </a>
       
          <a href="#" className="social-icon">
          <FaLinkedin/>
          </a>
     
        </div>
        <p className="footer-text">
          &copy;2021 <span className="text-primary">Voice Of People</span>. all rights
          reserved
        </p>
      </div>
    </footer>
        </div>
    );
};

export default Home;