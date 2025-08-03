import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        Project created by{" "}
        <a
          href="https://github.com/MalaysiaThomas"
          target="_blank"
          rel="noreferrer"
        >
          Malaysia Thomas
        </a>{" "}
        and is open-source on{" "}
        <a
          href="https://github.com/MalaysiaThomas/w5-react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        . Hosted on{" "}
        <a
          href="https://aerisweatherreact.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );};