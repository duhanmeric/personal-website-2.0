import React, { useCallback, useEffect, useRef, useState } from "react";
import Key from "../components/Key";
import axios from "axios";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [lastSent, setLastSent] = useState<number>(0);
  const dateNow = useRef<number>(0);

  useEffect(() => {
    dateNow.current = Date.now();
  }, []);

  const sendEmail = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(dateNow.current, lastSent, dateNow.current - lastSent > 5000);
      if (dateNow.current - lastSent > 5000) {
        setLastSent(Date.now());
        if (name !== "" || email !== "" || message !== "") {
          axios
            .post("http://localhost:5000/sendmail", {
              name,
              email,
              message,
            })
            .then(() => {
              setName("");
              setEmail("");
              setMessage("");
              setIsSent(true);
              dateNow.current = Date.now();
              setTimeout(() => {
                setIsSent(false);
              }, 3000);
            })
            .catch(() => {
              setError(true);
            });
        } else {
          setError(true);
          dateNow.current = Date.now();
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      } else {
        setError(true);
        setIsSent(false);
        dateNow.current = Date.now();
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    },
    [name, email, message, lastSent]
  );

  return (
    <section id="contact">
      <div
        className="contact-container"
        data-aos="fade-up"
        data-aos-once="true"
      >
        {error ? <div id="error">error</div> : null}
        {isSent ? <div id="success">success</div> : null}
        <h1 id="contact-title" className="text-center">
          CONTACT
        </h1>
        <form onSubmit={(e) => sendEmail(e)}>
          <div className="row mx-auto">
            <div className="col-lg-6 col-xl-6 contact-col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <label htmlFor="floatingMessage">Message</label>
              </div>
            </div>
            <div className="send-key-container mt-4 d-flex justify-content-end">
              <Key
                keyIcon="fas fa-level-down-alt"
                keyLink="#"
                typeOfKey="contact"
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
