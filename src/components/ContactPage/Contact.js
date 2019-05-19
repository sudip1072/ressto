import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/bestcodeeditor@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Rahul dev"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="subject"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Write Message"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
