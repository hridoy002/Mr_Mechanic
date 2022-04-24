import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = event => {
        event.preventDefault()
    }
    return (
        <div className="container my-5">
            <Form className='w-75 mx-auto' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Your Address" required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="email" placeholder="Email Address" required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Phone" required/>
                </Form.Group>
                <div>
                    <p>আপনার সমস্যাটি এখানে লিখে জানান</p>
                </div>
                <InputGroup className='mb-3'>

                    <InputGroup.Text>Write Your Problem</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button className='btn w-50' onClick={handleShow} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>আপনার অর্ডারটি গ্রহণ করা হয়েছে</Modal.Title>
                </Modal.Header>
                <Modal.Body>অল্প কিছুক্ষণের মাঝে আপনাকে ফোন করা হবে
                    <br />
                    <br />
                    <p className='text-success'><b>ধন্যবাদ!!!</b></p>
                </Modal.Body>


            </Modal>
        </div>
    );
};

export default Checkout;