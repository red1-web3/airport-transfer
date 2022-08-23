import React from "react";
import { MdAlarmOn } from "react-icons/md";

export default function Price() {
  return (
    <div className="mt-6">
      <p className="text-lg text-primaryColor font-medium">Payment</p>

      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <p className="text-secondayColor">One Way Tranfer</p>

          <div>
            <p className="capitalize font-medium">Total price</p>
            <p className="text-xl text-primaryColor font-medium">$550</p>
            <p className="text-[#3FDF4B] flex gap-2 items-center text-sm">
              <MdAlarmOn />
              No hidded cost
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
