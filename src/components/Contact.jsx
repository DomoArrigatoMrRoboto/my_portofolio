import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Contact Me</h2>
        <p>
          📧 Email:{" "}
          <a href="https://mail.yahoo.com/" target="_blank" rel="noopener noreferrer">
            ralucatrofimov@yahoo.com
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/raluca-trofimov-199872295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/raluca-trofimov-199872295
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/DomoArrigatoMrRoboto"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/DomoArrigatoMrRoboto
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
