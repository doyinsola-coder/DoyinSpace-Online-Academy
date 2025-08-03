// src/components/Checkout.jsx
import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function Checkout({ amount, courseTitle }) {
  const config = {
    public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "student@example.com",
      phonenumber: "07000000000",
      name: "DoyinSpace Student",
    },
    customizations: {
      title: "DoyinSpace Academy",
      description: `Payment for ${courseTitle}`,
      logo: "/favicon.jpg", // optional logo
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay Now",
    callback: (response) => {
      console.log(response);
      alert("✅ Payment successful!");
      closePaymentModal(); // closes the modal programmatically
    },
    onClose: () => alert("Payment closed"),
  };

  return (
    <div className="text-center mb-20">
      <FlutterWaveButton {...fwConfig} className="px-8 py-3 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition" />
    </div>
  );
}
