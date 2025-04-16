import React from "react";

const Contact = () => {
  return (
    <div className="ag-contact-container">
      <div className="ag-contact-title">
        <div>
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </div>
      </div>

      <div className="ag-contact-content">
        <div className="ag-contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me your requirement"
              required
            />
            <div >
              <p>Text</p>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
