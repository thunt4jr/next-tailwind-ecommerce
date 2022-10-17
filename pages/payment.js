import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/Layout";

export default function PaymentScreen() {
  return (
    <Layout title='Payment Method'>
      <CheckoutWizard activeStep={2} />
      <form className='mx-auto max-w-screen-md' onSubmit={submitHandler}>
        <h1 className='mb-4 text-xl'>Payment Method</h1>
        {
            ['PayPal', 'Stripe', 'CashOnDelivery'].map((payment) => (
                <div key={payment} className='mb-4'>
                    <input name="paymentMethod" className="p-2 outline-none focus:ring-0" id={payment} type="radio" checked={selectedPaymentMethod === payment } onChange={() => setSelectedPaymentMethod(payment)} />
                </div>
            ))
        }
      </form>
    </Layout>
  );
}