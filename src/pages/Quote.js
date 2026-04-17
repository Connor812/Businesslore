import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { PostData } from "../helpers/PostData";
import "../assets/css/quote.css";

import transition from "../transition";

function Quote() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !description) {
            setError("Please fill out all fields.");
            return;
        }

        PostData("quote.php", { name, email, phone, description })
            .then((result) => {
                if (result.success) {
                    setSuccess("Quote request submitted successfully.");
                    setName("");
                    setEmail("");
                    setPhone("");
                    setDescription("");
                } else {
                    setError(result.message);
                }
            })
            .catch((error) => {
                setError("An error occurred. Please try again later.");
            });



    };

    return (
        <main className="quote-container">
            <Form onSubmit={handleSubmit}>
                <h1>Request a Quote</h1>
                <hr />
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form.Group controlId="name" className="quote-input">
                    <Form.Label className="text-start w-100">Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email" className="quote-input">
                    <Form.Label className="text-start w-100">Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="phone" className="quote-input">
                    <Form.Label className="text-start w-100">Phone Number:</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="description" className="quote-input">
                    <Form.Label className="text-start w-100">Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Describe your project"
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </main>
    );
}

export default transition(Quote);
