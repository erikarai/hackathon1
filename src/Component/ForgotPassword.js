// src/components/ForgotPassword.js
import React, { Link, useState } from 'react';
import './ForgotPassword.css';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   // Replace this with your actual API call to send a password reset email
    //   // For the sake of this example, we assume a successful request returns { message: 'Email sent' }
    //   const response = await fetch('/api/reset-password', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setMessage(data.message);
    //   } else {
    //     setMessage('Error: ' + data.message);
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   setMessage('An error occurred');
    // }
  };

  return (
    <div className='hello'>
    <div className='forgot'>
      <h2 className='password'>Forgot Password</h2>
      <form className="submit" onSubmit={handleSubmit}>
        <label className='email'>
          Email:
          <input className='change' type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      <p className='mess'>{message}</p>
    </div>
    </div>
  );
}

export default ForgotPassword;
