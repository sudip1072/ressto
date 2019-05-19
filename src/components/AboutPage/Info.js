import React from "react";
import Title from "../Title";
import aboutBCG from "../../images/aboutBCG.jpg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBCG}
              className="img-fluid img-thumbnail"
              alt="aboutimage"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              scelerisque velit ac fringilla lobortis. Donec eget finibus leo.
              Phasellus est nulla, pulvinar at condimentum non, rutrum non
              magna. Mauris eu blandit nisi. Nulla nisi nisl, maximus vel
              fringilla a, scelerisque at neque. Proin a neque consequat massa
              interdum interdum. Mauris sed tellus magna.
            </p>
            <p className="text-lead text-muted my-3">
              Etiam convallis pellentesque purus in finibus. Etiam sapien justo,
              sollicitudin nec dolor tempus, dapibus lobortis lacus.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
