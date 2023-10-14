import React, { useState } from "react";
import swal from 'sweetalert';

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to the API
    try {
      const response = await fetch("http://localhost:8000/auth/reach-out/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      });

      if (response.ok) {
        // Display success message using SweetAlert
        swal({
          title: "Success",
          text: "Your message has been sent.",
          icon: "success",
          button: "OK",
        });
      } else {
        // Display error message using SweetAlert
        swal({
          title: "Error",
          text: "Failed to send the message.",
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      // Display error message using SweetAlert
      swal({
        title: "Error",
        text: "An error occurred while sending the message.",
        icon: "error",
        button: "OK",
      });
    }

    // Clear the form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormContact;
