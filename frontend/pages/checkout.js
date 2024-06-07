import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useInitialRender } from "/utils/useInitialRender";
import CheckoutForm from "/components/CheckoutForm";
import CheckoutCart from "/components/CheckoutCart";
const stripePromise = loadStripe("pk_test_51PLt34DGQVO4tO8zyOgp7V1KpHp5bTLs0IYcbsjKHpS15ruxu0XJ1qAH6dC6QmkwR21vYL3MxZ4ApnPSPXmImGqw007e1RaGny");

export default function Checkout() {
  const initialRender = useInitialRender();
  if (!initialRender) return null;

  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <CheckoutCart />
        </div>
        <div className="col-span-3">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </section>
  );
}