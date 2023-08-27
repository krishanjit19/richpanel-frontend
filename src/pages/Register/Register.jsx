import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      fullName: fullName,
      email: email,
      password: password
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        alert('Registration successful');
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="home">
        <div className="register">
          <div className="top">
            <h3>Create Account</h3>
          </div>
          <div className="bottom">
            <form method='POST' className='register-form'>
              <input
                type='text'
                placeholder='Enter your full name'
                value={fullName}
                onChange={handleFullNameChange}
              />
              <input
                type='email'
                placeholder='Enter your email address'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={handlePasswordChange}
              />
              <button type='submit' onClick={handleRegister}>Sign  Up</button>
            </form>
            <div className="login">
              <span>Already have an account? <Link className='join-link' to='/'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register