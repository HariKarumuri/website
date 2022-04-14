import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className="bg1 py-3 vh-80 Contact" id="contact">
      <div className="container">
        <h6 className="text-white text-center" id="#portfolio">
          contact me
        </h6>
        <div className="row">
          <div className="col p-5 d-flex align-item-center justify-content-center">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control bg2 text-white"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control bg2 text-white"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control bg2 text-white"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div class="form-group">
                <textarea
                  className="form-control bg2 text-white"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="add a message"
                ></textarea>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center m-3">
                <button type="submit" className="btn primary-green ">
                Submit
              </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
