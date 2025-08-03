import React from "react";
import { FlutterWaveButton } from "flutterwave-react-v3";

export default function FlutterwaveTest() {
  const config = {
    public_key: "FLWPUBK_TEST-7d560108469dc344d43871c29f38c6ee-X", // 🔥 Hardcoded test key
    tx_ref: Date.now(),
    amount: 5000,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: "student@example.com",
      phone_number: "09012345678",
      name: "Test User",
    },
    customizations: {
      title: "DoyinSpace Payment Test",
      description: "Testing Flutterwave Integration",
      logo: "https://your-logo-url.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
      console.log(response);
      alert("Payment Complete! Check console for response.");
    },
    onClose: () => alert("Payment window closed."),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl mb-6">Flutterwave Payment Test</h1>
      <FlutterWaveButton {...fwConfig} className="px-6 py-3 bg-green-400 rounded-lg font-bold text-black" />
    </div>
  );
}
