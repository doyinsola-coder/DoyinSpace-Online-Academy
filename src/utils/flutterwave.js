export const initializeFlutterwave = (course) => {
  const script = document.createElement("script");
  script.src = "https://checkout.flutterwave.com/v3.js";
  script.onload = () => {
    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-xxxxxx",
      tx_ref: Date.now(),
      amount: course.price,
      currency: "NGN",
      payment_options: "card",
      customer: { email: "test@test.com" },
      callback: (data) => {
        console.log("Payment successful", data);
      },
    });
  };
  document.body.appendChild(script);
};
