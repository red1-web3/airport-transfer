import React from "react";
import CarComponent from "./CarComponent";

export default function CarMainComonents() {
  return (
    <div className="space-y-4">
      <CarComponent />
      <CarComponent />
      <CarComponent popular />
      <CarComponent />
      <CarComponent />
    </div>
  );
}
