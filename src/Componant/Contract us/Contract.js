import React from 'react';

const Contract = () => {
    return (
 
             <section className="contact">
      <section className="section-center clearfix">
        <article className="contact-info">
          <div className="contact-item">
            <h3 className="contact-title">
              <span className="contact-icon">
                <i className="fas fa-location-arrow"></i> </span
              >address
            </h3>
            <h3 className="contact-text">
            Uttora,Dhaka,Bangladesh
            </h3>
          </div>
          <div className="contact-item">
            <h3 className="contact-title">
              <span class="contact-icon"> <i class="fas fa-envelope"></i> </span
              >email
            </h3>
            <h3 className="contact-text">
              Voiceofpeople@email.com
            </h3>
          </div>
          <div className="contact-item">
            <h3 className="contact-title">
              <span className="contact-icon">
                <i className="fas fa-location-arrow"></i> </span
              >telephone
            </h3>
            <h3 className="contact-text">
              + 123 456 789
            </h3>
          </div>
        </article>
        <article className="contact-form">
          <form
            action="https://formspree.io/learncodetutorial@gmail.com"
            method="POST"
            className="form-group"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              placeholder="message"
              className="form-control"
              rows="5"
            ></textarea>
            <button class="main-btn">send</button>
          </form>
        </article>
      </section>
    </section> 
     
    );
};

export default Contract;