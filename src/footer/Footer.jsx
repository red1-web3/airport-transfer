import React from "react";
import FooterComponent from "./FooterComponent";

const discoverUs = {
  title: "Discover Us",
  links: [
    {
      text: "Contact Us",
      url: "",
    },
    {
      text: "About Us",
      url: "",
    },
  ],
};
const contactUs = {
  title: "Contact Us",
  links: [
    {
      img: "/img/english.svg",
      text: "English +1 4156599831",
      url: "",
    },
    {
      img: "/img/italiano.svg",
      text: "Italiano +39 0656556172",
      url: "",
    },
    {
      img: "/img/deutsch.svg",
      text: "Deutsch+44 2078552543",
      url: "",
    },
  ],
};
const company = {
  title: "Company",
  links: [
    {
      text: "Terms & Conditions",
      url: "",
    },
    {
      text: "Privacy Policy",
      url: "",
    },
    {
      text: "For Travel Agencies",
      url: "",
    },
    {
      text: "Become A Supplier",
      url: "",
    },
    {
      text: "Supplier Login",
      url: "",
    },
  ],
};
const airports = {
  title: "Top Airports",
  links: [
    {
      text: "London Heathrow Airport",
      url: "",
    },
    {
      text: "Brindisi Salento Airport",
      url: "",
    },
    {
      text: "Málaga Airport",
      url: "",
    },
    {
      text: "Alghero Airport",
      url: "",
    },
    {
      text: "Naples Airport",
      url: "",
    },
    {
      text: "Heraklion Airport",
      url: "",
    },
    {
      text: "Frankfurt Airport",
      url: "",
    },
    {
      text: "Faro Airport",
      url: "",
    },
    {
      text: "Palermo Airport",
      url: "",
    },
    {
      text: "Bari Airport",
      url: "",
    },
    {
      text: "Bologna Airport",
      url: "",
    },
  ],
};
const download = {
  title: "Download Our App",
  images: [
    {
      img: "/img/google_playstore.svg",
      url: "",
    },
    {
      img: "/img/app_store.svg",
      url: "",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A1A34] pt-32">
      <div className="container-md ">
        <div className="grid grid-cols-1 md:grid-cols-4 space-y-10 md:space-y-0 border-b-2 border-[#707070] pb-10">
          <div className="space-y-10">
            <FooterComponent data={discoverUs} />
            <ul className="space-y-1.5">
              <h4 className="footerTitleStyle">{contactUs.title}</h4>
              {contactUs.links.map(({ img, text, url }) => {
                return (
                  <li key={Math.random()}>
                    <a
                      href="#"
                      className="flex text-white md:text-base text-xl lg:text-sm font-normal"
                    >
                      <img src={img} alt={text} />
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <FooterComponent data={company} />
          </div>
          <div>
            <FooterComponent data={airports} />
          </div>
          <div className="md:justify-self-end">
            <ul className="flex md:flex-col gap-2">
              <h4 className="text-sm text-white hidden md:block">
                {download.title}
              </h4>
              {download.images.map(({ img, url }) => {
                return (
                  <a key={Math.random()} href="#">
                    <img width={180} src={img} alt={img} />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="py-5 flex flex-col md:flex-row justify-between items-center font-medium text-[#FFFFFF]">
          <p>@ 2020 Deksa. All rights reserved.</p>
          <p>Made by Red-</p>
        </div>
      </div>
    </footer>
  );
}
