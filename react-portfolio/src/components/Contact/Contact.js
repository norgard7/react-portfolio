import React, { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import {validateEmail} from '../../utils/helper';
// bootstrap import
import Form from 'react-bootstrap/Form';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };


  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    } else if (!name) {
      setErrorMessage('Enter your name')
    } else if (!message) {
      setErrorMessage('Enter a message')
    }
    setEmail('');
    setName('');
    setMessage('');
  
  };
  return (
    <div>   
        <h1 className="text-center h1-title">Contact Me</h1>
        <Form className="contactForm mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} name="name" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={email} name="email" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} name="message" onChange={handleInputChange}/>
          </Form.Group>
          <div  className="d-flex justify-content-center">
            <button className="contact-btn" type="button" onClick={handleFormSubmit}>Submit</button>
          </div>
        {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
          </Form>        
    </div>
  );



    
  
  }

export default Contact;