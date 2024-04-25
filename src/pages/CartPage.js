import React from "react";
import PageHeader from "../components/CartPageComponents/PageHeader";
import CartContent from "../components/CartPageComponents/CartContent";

function CartPage() {
  return (
    <div className="py-40">
      <PageHeader/>
      <CartContent/>
    </div>
  );
}

export default CartPage;
