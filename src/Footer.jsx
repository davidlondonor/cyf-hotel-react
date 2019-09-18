import React from "react";

const contactInfo = [
  "123 Fake Street,London,E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
  "probemos"
];

const Footer = () => {
  return (
    <div>
      <ul>
        {contactInfo.map(contactInfo => (
          <li>{contactInfo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
