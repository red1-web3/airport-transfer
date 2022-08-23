import React from "react";
import Billing from "./Billing";
import Choose from "./Choose";
import Payment from "./Payment";
import Price from "./Price";

export default function PayPage() {
  return (
    <div>
      <Payment />
      <Billing />
      <Price />
      <Choose />
    </div>
  );
}
