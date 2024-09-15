import './SubscribeForm.css';
import React from 'react'


const MyComponent = () => {
  return (
    <div className="body">
      <h2>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and updates.</p>
      <form className="subscribe-form">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" /> <br></br>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default MyComponent;