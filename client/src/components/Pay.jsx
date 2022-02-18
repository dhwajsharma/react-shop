import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51KUNd1SIR2S5MwlY2PI175uJscQhb46ir7dBB4ld2CNC4PrQEiHxE1ke0XfJ9Ww3mJULAyD8ze57UihpQKqsl64D00y3YAcR7S";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Dhwaj Shop"
        image="https://i.guim.co.uk/img/media/b6b21223f7a169e37653d998d9541985815388b1/4_0_2559_1537/master/2559.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5cf76ad9a55a1d0f5ce3771f5e9cf8c6"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
