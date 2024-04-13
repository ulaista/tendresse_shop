import React from "react";
import PageHeader from "../components/deliveryPageComponents/PageHeader";
import DeliverySection from "../components/deliveryPageComponents/Section";

function DeliveryPage() {
  return (
    <div className="pt-40">
      <PageHeader/>
      <div className="section flex justify-center max-h-max">
        <div className="col w-5/6">
          <div className="text-3xl font-medium py-10">ДОСТАВКА И ОПЛАТА</div>
          <DeliverySection/>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPage;
