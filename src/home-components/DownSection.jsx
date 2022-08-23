import { list } from "postcss";
import React from "react";

const cards = [
  {
    bgColor: "#4FBDE6",
    lists: [
      "Chania Airport Transfers (CHQ)",
      "Pisa Airport Transfers (PSA)",
      "Menorca Airport Transfers (MAH)",
      "Turku Airport Transfers (TKU)",
      "Billund Airport Transfers (BLL)",
      "Copernicus Airport Wrocław Transfers (WRO)",
    ],
  },
  {
    bgColor: "#46A4C7",
    lists: [
      "Zakynthos Airport Transfers (ZTH)",
      "Sofia Airport Transfers (SOF)",
      "Zadar Airport Transfers (ZAD)",
      "Riga International Airport Transfers (RIX)",
      "London City Airport Transfers (LCY)",
      "Bolzano Airport Transfers (BZO)",
    ],
  },
  {
    bgColor: "#0A1A34",
    lists: [
      "Bologna Airport Transfers (BLQ)",
      "Ancona Falconara Airport Transfers (AOI)",
      "Melbourne Moorabbin Airport Transfers (MBW)",
      "Burgas Airport Transfers (BOJ)",
      "Hamilton Airport Transfers (HLZ)",
      "Verona Airport Transfers (VRN)",
    ],
  },
];

export default function LastSection() {
  return (
    <section className="md:py-32 py-24 container-md flex flex-col items-center gap-12">
      <h3 className="text-3xl text-primaryColor font-bold md:w-[80%] lg:w-[60%] text-center">
        Book A Private Transfer At Over 1500 Airports, Stations And Ports
        Worldwide
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md::mx-14">
        {cards.map(({ bgColor, lists }) => {
          return (
            <ul
              key={Math.random()}
              style={{ backgroundColor: bgColor }}
              className="py-5 px-8 space-y-3 rounded-md"
            >
              {lists.map((list) => {
                return (
                  <li key={Math.random()} className="text-white">
                    {list}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </section>
  );
}
