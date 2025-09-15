import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer mt-3">
      <img
        className="footerlogo"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/168/063/original/logo.jpg?1749831249"
        alt="Studio Ghibli Logo"
      />
      <br />
      <p>
        This homepage was coded in React with 🧡.
        <br />~ <strong>Built by</strong>{" "}
        <a
          href="https://www.linkedin.com/in/s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandra Mercadal,
        </a>{" "}
        <strong> Open-sourced</strong> on{" "}
        <a
          href="https://github.com/s/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Github</strong>
        </a>{" "}
        and <strong>hosted</strong> on{" "}
        <a
          href="https://b.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Netlify</strong>
        </a>{" "}
        ~
      </p>
    </div>
  );
}
