import './Home.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });


      if (response.ok) {
        alert('Login successful');
        navigate('/plans');

      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <>
      <div className="home">
        <h1>Welcome to Richpanel Assessment</h1>
        <div className="signin">
          <div className="top">
            <h3>Login to your account</h3>
          </div>
          <div className="bottom">
            <form method='POST' className='login-form'>
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
              <button type='submit' onClick={handleLogin}>Login</button>
            </form>
            <div className="login">
              <span>New to MyApp? <Link className='join-link' to='/register'>Sign Up</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home