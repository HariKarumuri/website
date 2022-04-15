import React, { useState } from "react";
import "./Contact.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success,setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "contacts"), {
      Name: name,
      Email: email,
      Mess: message,
    });
    alert("✅✅✅your form has been submitted 👍👍👍");
    setSuccess(true)
    setEmail("");
    setMessage("");
    setName("");
    
  };

  return (
    <div className="bg1 py-3 vh-80 Contact" id="contact">
      <div className="container">
        <h6 className="text-white text-center" id="#portfolio">
          contact me
        </h6>
        <div className="row d-flex flex-column">
          <div className="col p-5 d-flex align-item-center justify-content-center">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control bg2 text-white"
                  id="NameClass"
                  placeholder="Name"
                  aria-label="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control bg2 text-white"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                <textarea
                  className="form-control bg2 text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="add a message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center m-3">
                  <button type="submit" className="btn primary-green text-white">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className={`SucessBox primary-green ${success?"":"displayNONE"}`}>
            <p>you have sucessfully submitted the form,Thank you🙏🙏</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
