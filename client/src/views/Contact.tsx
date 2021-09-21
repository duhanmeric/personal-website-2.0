import React from "react";
import Key from "../components/Key";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 id="contact-title" className="text-center">
          CONTACT
        </h1>
        <form action="#">
          <div className="row mx-auto">
            <div className="col-lg-6 col-xl-6 contact-col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 contact-col">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 contact-col">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message"
                  id="floatingMessage"
                ></textarea>
                <label htmlFor="floatingMessage">Message</label>
              </div>
            </div>
            <div className="send-key-container mt-4 d-flex justify-content-end">
              <Key
                keyIcon="fas fa-level-down-alt"
                keyLink="#"
                isSocialKey={false}
                keyText="send"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
