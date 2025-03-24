import React from "react";
import Layout from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { db } from "../../utility/firebase";


import classes from "./Payment.module.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { axiosBase_URL } from "../../components/api/axiosBase";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems);
  
  const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
  const [prossing, setprossing] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    
    console.log(e)
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    // step 1 to connect with backend || functions
    setprossing(true);
    try {
      const response = await axiosBase_URL({
        method: "POST",
        url: `/payment/create?total=${totalPrice * 100}`,
      });
      console.log(response.data)
      const clientsecret = response.data?.clientSecret;

      //step 2 the confarmation of the payment
      const confirmation = await stripe.confirmCardPayment(clientsecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(confirmation);

if (!user || !user.uid) {
  console.error("User is not defined. Cannot store order.");
  return; // Stop execution if `user` is not available
}

      const paymentIntent = confirmation.paymentIntent; // Get paymentIntent from confirmation
      

     
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
     
      

      setprossing(false);
    } catch (error) {
      // console.log(error);
      console.log("Error processing payment:", error);
      setprossing(false);
    }
  };

  return (
    <Layout>
      <>
        <div className={classes.payment_container}>
          <div className={classes.payment_header}>
            <h3>Payment Page</h3>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>

          <div className={classes.payment_items}>
            {cartItems.map((item) => (
              <div key={item?.id} className={classes.payment_item}>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.payment_image}
                  />
                  <div>
                    {/* <h5>{item?.title}</h5> */}
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <button className={classes.payment_button}>Proceed to Payment</button> */}

        <div className={classes.payment_stripe}>
          <h3>payment methods</h3>
          <div className={classes.payment_card_container}>
            <form action="" onSubmit={handleSubmit}>
              {cardError && <small style={{ color: "red" }}>{cardError}</small>}
              <CardElement
            
                className={classes.vise_card}
              />
              <div>
                <div>
                  <span>Total price | ${totalPrice}</span>
                </div>
                <button type="submit" onClick={handleChange}>
                  {prossing ? (
                    <div className={classes.loading}>
                      {" "}
                      <ClipLoader color="grey" size={10} />
                      <p> please wait...</p>
                    </div>
                  ) : (
                    "Pay Now"
                  )}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
  
};

export default Payment;
