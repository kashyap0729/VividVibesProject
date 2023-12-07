import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
import {Form, Button} from 'react-bootstrap';

function ContactUs() {

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleOnSubmit = async (event) => {

    event.preventDefault();

    try {
      const requestBody = {
        fullName: fullName,
        email: email,
        message: message
      };

      const url = `http://localhost:5000/user/contactUs`;
      const response = await axios.post(url, requestBody, {});
      if (response.data.isSuccess) {
        setResult('Inquiry Email sent successfully.');
      } else {
        setResult('An error occurred while trying to send email for inquiry. Please try again.'); // Set error message
      }
    } catch (error) {
        // Handle errors from the server or network issues
        setResult('An error occurred while trying to send email for inquiry. Please try again.');
        // You can also use error.response or error.request for more detailed error handling
    };
  };

return(
    <>
    <h1>Contact Us</h1>
    <Form className='contact' id="contactUs" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="fullName" placeholder="Enter Full Name"
         value={fullName}
         onChange={(e) => setFullName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Message"
         value={message}
         onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='btn-contact'>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default ContactUs;