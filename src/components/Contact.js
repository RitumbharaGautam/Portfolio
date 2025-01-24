import emailjs from "@emailjs/browser";
import { useRef } from "react";
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ka6jt86", "template_5n3a396", form.current, {
        publicKey: "x4JP0H2Bg-u5lswP8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="connect" id="connect">
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>Please! fill the form below for any work opportunities.</p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <span>
            <button className="vvd1">
              <span>Submit</span>
            </button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
