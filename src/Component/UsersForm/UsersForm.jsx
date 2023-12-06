import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera } from '@fortawesome/free-solid-svg-icons'; // Import camera icon
import './UsersForm.css'; // Import the CSS file

function UsersForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picString, setpicString] = useState('');
  const [fullname, setFullName] = useState('');
  const [file, setFile] = useState(null); // New state for the file
  
  const [result, setResult] = useState(null);
  const [thumbnail, setThumbnail] = useState(null); // New state for thumbnail

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('file', file); // Append the file to the form data

      const url = 'http://localhost:5000/user/update';
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.isSuccess) {
        setResult('SignUp Successful');
      } else {
        setResult(
          'An error occurred while trying to authenticate. Please try again.'
        );
      }
    } catch (error) {
      setResult(
        'An error occurred while trying to authenticate. Please try again.'
      );
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('file', file); // Append the file to the form data

      const url = 'http://localhost:5000/user/edit'; // Replace with the actual update endpoint
      const response = await axios.put(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.isSuccess) {
        setResult('Update Successful');
      } else {
        setResult(
          'An error occurred while trying to update. Please try again.'
        );
      }
    } catch (error) {
      setResult(
        'An error occurred while trying to update. Please try again.'
      );
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Display image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setThumbnail(null);
    }

    setFile(selectedFile);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <>
      <h1 className='heading'>Users Update</h1>

      <Form onSubmit={handleSubmit} className="custom-container">
        <Form.Group controlId="formBasicProfilePicture">
          <Form.Label>Profile Picture</Form.Label>
          <div className="profile-picture-container" onClick={handleIconClick}>
            {thumbnail ? (
              <img src={thumbnail} alt="Profile Thumbnail" className="thumbnail" />
            ) : (
              <>
                {/* <FontAwesomeIcon icon={faCamera} size="4x" /> */}
                <div className="camera-icon">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
              </>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="FullName"
            placeholder="FullName"
            value={fullname}
            
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            readOnly={true} // Set the email input field as read-only
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicResult">
          <Form.Text className="text-muted">
            {result && <div>{JSON.stringify(result)}</div>}
          </Form.Text>
        </Form.Group>

        <Button className="custom-submit-button" variant="primary" type="submit">
          Submit
        </Button>

        <Button className="custom-update-button" variant="secondary" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default UsersForm;




