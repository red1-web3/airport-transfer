import React from "react";
import LabelInput from "../details-components/LabelInput";

export default function Billing() {
  return (
    <div>
      <p className="text-lg text-primaryColor font-medium">Billing Address</p>
      <div className="space-y-4 p-8">
        <div className="flex flex-col md:flex-row md:gap-4">
          <LabelInput label={"first name"} />
          <LabelInput label={"last name"} />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <LabelInput label={"company"} />
          <LabelInput label={"address"} />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <LabelInput label={"city"} />
          <LabelInput label={"zip code"} />
          <LabelInput label={"country"} />
        </div>
      </div>
    </div>
  );
}
