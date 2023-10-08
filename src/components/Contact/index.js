import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Footer from "../../components/Footer";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <div className="title">
        <h2 id="contact">Contact me</h2>
      </div>

      <Form id="contact-form" onBlur={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name:</Form.Label>

          <Form.Control
            type="text"
            name="name"
            placeholder="John Doe"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label htmlFor="email">Email:</Form.Label>

          <Form.Control
            type="email"
            placeholder="johndoe@example.com"
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Message:</Form.Label>

          <Form.Control
            as="textarea"
            type="text"
            placeholder="message"
            rows={5}
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="button_wrapper">
          <button data-testid="button" type="submit" className="button-72">
            Submit
          </button>
        </div>
      </Form>

      <Footer></Footer>
    </section>
  );
}

export default ContactForm;
