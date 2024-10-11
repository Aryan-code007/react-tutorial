import './SubscribeForm.css';
import React from 'react';

const MyComponent = () => {
  return (
    <div className="subscribe-container">
      <h2 className="subscribe-title">SUBSCRIBE</h2>
      <p className="subscribe-text">
        Sign up with your email address to receive news and updates.
      </p>
      <form className="subscribe-form">
        <input type="text" placeholder="First name" className="input-field" />
        <input type="text" placeholder="Last name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="number" placeholder="Phone" className="input-field" name="number"/>
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default MyComponent; 