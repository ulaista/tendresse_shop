import React from "react";
import PageHeader from "../components/forCustomerPageComponents/PageHeader";
import CustomerSection from "../components/forCustomerPageComponents/CustomerSection";


function CustomerPage() {
  return (
    <div className="pt-40">
      <PageHeader/>
      <div className="section flex justify-center max-h-max">
        <div className="col w-5/6">
          <div className="text-3xl font-medium pt-10">ПОКУПАТЕЛЯМ</div>
        </div>
      </div>
      <CustomerSection/>
    </div>
  );
}

export default CustomerPage;
