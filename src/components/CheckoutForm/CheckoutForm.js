import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css';
import ApiService from "../../api";

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    setError(event.error ? event.error.message : null);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
      billing_details: {
        email: email,
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    ApiService.saveStripeInfo({
      email, payment_method_id: paymentMethod.id
    })
    .then(response => {
      const { client_secret } = response.data;
      if (client_secret) {
        // Handle 3D Secure authentication flow
        stripe.handleCardAction(client_secret)
          .then(result => {
            if (result.error) {
              setError(result.error.message);
            } else {
              // 3D Secure authentication successful
              // Continue with the payment submission
              console.log("Payment Method:", paymentMethod);
              // Submit the payment method ID to your server for processing.
              // Your server should create a PaymentIntent or a SetupIntent and return the client secret.
              // After that, you can confirm the PaymentIntent or SetupIntent on the client-side to complete the payment.

              // Clear the email field and any previous error.
              setEmail('');
              setError(null);
            }
          });
      } else {
        // Payment method is confirmed and no 3D Secure is required
        // Continue with the payment submission
        console.log("Payment Method:", paymentMethod);
        // Submit the payment method ID to your server for processing.
        // Your server should create a PaymentIntent or a SetupIntent and return the client secret.
        // After that, you can confirm the PaymentIntent or SetupIntent on the client-side to complete the payment.

        // Clear the email field and any previous error.
        setEmail('');
        setError(null);
      }
    })
    .catch(error => {
      setError(error.message);
    });
  }

  return (
    <div className="c-box">
      <form onSubmit={handleSubmit} className="stripe-form ce-box">
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            placeholder="jenny.rosen@example.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-row pe-box">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <CardElement id="card-element" onChange={handleChange} />
          {error && <div className="card-errors" role="alert">{error}</div>}
        </div>
        <button type="submit" className="submit-btn">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
