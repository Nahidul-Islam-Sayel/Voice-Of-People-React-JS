import React from 'react';
import './About.css';
import {FaLinkedin, FaTumblr ,FaFacebook , FaAngellist , FaOdnoklassniki , FaStudiovinari , FaTheRedYeti} from "react-icons/fa";
const About = () => {
    return (
        <div>
            <div className="aboutus">
        <div className="alert alert-primary" role="alert">
     
        </div>
        <article className="skill">
          <span className="skill-icon">
          <FaOdnoklassniki/>
          </span>
          <h3 className="skill-title">আমাদের লক্ষ্য</h3>
          <p className="skill-text">
            দেশকে সব ধরনের অন্যায় , অনিয়ম থেকে বাচাতে হলে দেশবাসীকে একযুগে কাজ করতে হবে সবাইকে অন্যায়ের প্রতিবাদ করতে হবে। আমাদের এই ওয়েবসাইটের মাধ্যমে উঠে আসবে সাধারন মানুষের সাথে ঘটে যাওয়া অনিয়ম। যার ফলে আইনশৃঙ্খলাবাহীন পক্ষ্যে সহজে অপরাধী সনাক্তকরন করা সম্ভব হবে।
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
          <FaTheRedYeti/>
          </span>
          <h3 className="skill-title">পরিচয় গোপনীয়তা</h3>
          <p className="skill-text">
            আমাদের এই ওয়েবসাইটে কোন অভিযোগকারীর পরিচয় প্রকাশ করা হবে না আপনি কোন প্রকার ভয়ভীতি ছাড়া আপনার অভিযোগ করুন। আমরা আপনার সম্পূর্ন নিরাপত্তা নিশ্চিত করবো। তবে যদি আপনি কোন প্রকার ইচ্ছাকৃত ভুল তথ্য দিয়ে থাকেন আমরা আপনার বিরুদ্ধে আইনঅনুযায়ী বব্যস্থা  নিবো। নির্ভয়ে প্রতিবাদ করুন অন্যায়ের বিরুদ্ধে।
          </p>
        </article>
    
    </div>
    </div>
 
   
    );
};

export default About;