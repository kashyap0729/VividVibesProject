import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button,  Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const navigate = useNavigate();

  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  try {
    const requestBody = {
      email: email,
      password: password
    };
    
    // Determine the URL based on the role
    const url = role === 'User' 
      ? `http://localhost:5001/user/authenticate`
      : `http://localhost:5001/admin/authenticate`;

    const response = await axios.post(url, requestBody);
    if (response.data.authenticated) {
      if (role === 'User') {
        // Handle user session
        localStorage.setItem('userSession', JSON.stringify(response.data.user));
        navigate('/'); // Navigate to home page
      } else if (role === 'Admin') {
        // Handle admin session
        localStorage.setItem('adminSession', JSON.stringify(response.data.admin));
        navigate('/admin'); // Navigate to admin page
      }
      setResult('Login Successful');
    } else {
      setResult('Authentication failed. Please check your credentials.'); // Set error message
    }
    } catch (error) {
      // Handle errors from the server or network issues
      setResult('An error occurred while trying to authenticate. Please try again.');
      // You can also use error.response or error.request for more detailed error handling
    }
  };
  

  return (
    
    <div className="page-background"> {/* Add a class or inline style for the background */}
    <Form className="cmxform" onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="email">
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2} htmlFor="password">
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 align-items-center">
        <Form.Label as="legend" column sm={2}>
          Role
        </Form.Label>
        <Col sm={4}>
          <Form.Check
            type="radio"
            label="User"
            name="roleRadios"
            id="radioUser"
            value="User"
            checked={role === 'User'}
            onChange={() => setRole('User')}
          />
          <Form.Check
            type="radio"
            label="Admin"
            name="roleRadios"
            id="radioAdmin"
            value="Admin"
            checked={role === 'Admin'}
            onChange={() => setRole('Admin')}
          />
        </Col>
      </Form.Group>

      {result && <div>{JSON.stringify(result)}</div>}

      <Button type="submit" className="submit">
        Submit
      </Button>
    </Form>
  </div>
  );
}

export default Login;