import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='outline-primary ms-3' onClick={handleShow}>
        <span className='fa fa-user-plus me-2'></span>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className='fa fa-user-plus me-2'></span>
            Sign up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant='primary w-100'>
            <span className='fa fa-google me-2'></span>
            Sign up With Google
          </Button>
          <hr />
          <Button variant='primary w-100'>
            <span className='fa fa-facebook me-2'></span>
            Sign up With Facebook
          </Button>
          <hr />
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' autoFocus />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' autoFocus />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' autoFocus />
            </Form.Group>
            <input type='checkbox' className='form-check-input' />
            <label className='ms-1'>Check me out</label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-primary' onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
