import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
    <div className='container mt-5'>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button className='mb-5' variant="primary">Submit</Button>
    </div>
    );
};

export default About;