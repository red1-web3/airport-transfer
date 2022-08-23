import React from "react";
import FooterList from "./FooterList";

export default function FooterComponent({ data }) {
  const { title, links } = data;
  return (
    <ul className="space-y-1.5">
      <h4 className="footerTitleStyle">{title}</h4>
      {links.map(({ text, url }) => {
        return <FooterList text={text} key={Math.random()} />;
      })}
    </ul>
  );
}
