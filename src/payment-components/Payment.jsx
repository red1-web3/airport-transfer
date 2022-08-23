import React from "react";

export default function Payment() {
  return (
    <div>
      <p className="text-lg text-primaryColor font-medium">Payment</p>
      <div className="space-y-1 p-8">
        <label htmlFor="code" className="text-xs text-secondayColor">
          Use Discount Code
        </label>
        <div className="flex focus:ring focus:ring-slate-200" tabIndex={1}>
          <input
            type="text"
            id="code"
            className="outline-none bg-slate-200 pl-3 rounded-l-sm"
          />
          <button className="bg-primaryColor px-[20px] rounded-sm py-3 font-medium text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
