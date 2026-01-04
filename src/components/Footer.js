import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const quotes = [
  '"A Birth Justice Warrior is someone who is focused on the idea of making birth equal for everyone" - Assembly Councilwoman Michaelle Solages',
  '"The fundamental work of the Birth Justice Warriors is to make injustice visible" - Birth Justice Warriors Founder, Dr. Martine Hackett',
  '"Our babies are born too soon and too small" - Birth Justice Warriors Founder, Rev. Dr. Nellie Taylor-Walthrust',
];

const Footer = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const location = useLocation();

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [location.pathname]);

  return (
    <footer className="footer-section">
      <p className="quotes-section">{randomQuote}</p>
    </footer>
  );
};

export default Footer;
