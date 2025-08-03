import { useEffect, useState } from "react";

export default function useFlutterwave() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.FlutterwaveCheckout) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  return loaded;
}
