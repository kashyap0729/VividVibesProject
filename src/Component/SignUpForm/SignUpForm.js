import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';
import { Form, Button} from 'react-bootstrap';

function SignUpForm() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  try {
      const requestBody = {
      fullname:fullname,
      email: email,
      password: password
    };
    // Determine the URL based on the role
    const url = `http://localhost:5000/user/create`;

    const response = await axios.post(url, requestBody);
      if (response.data.isSuccess) {
        //navigate('/home'); 
        setResult('SignUp Successful');// Redirect to home page
      } else {
        
        setResult('An error occurred while trying to authenticate. Please try again.'); // Set error message
      }
    } catch (error) {
      // Handle errors from the server or network issues
      setResult('An error occurred while trying to authenticate. Please try again.');
      // You can also use error.response or error.request for more detailed error handling
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="FullName" placeholder="FullName" 
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <Form.Text className="text-muted">
        {result && <div>{JSON.stringify(result)}</div>}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default SignUpForm;