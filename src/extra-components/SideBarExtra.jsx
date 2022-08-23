import React from "react";
import UDL from "../carPage-components/UnorderedList1";
import MAP from "../carPage-components/GoogleMap";
import Booking from "./Booking";

export default function SideBarExtra() {
  return (
    <>
      <UDL />
      <Booking />
      <MAP />
    </>
  );
}
