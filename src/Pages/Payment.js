import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe('pk_test_51NZ6c9SAS0kzJmjQhckq80wdBFqkRwwekvQjMvHm5s9v631JolPH08JFAPbNU3p9yQImisAsR3wCFlmr9NTwI1to00bmzGdHRD');
const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);
export default Payment;
