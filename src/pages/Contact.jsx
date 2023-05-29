import React from "react";
import image from "../assets/contact/mobile/image-hero.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="img-text">
        <img src={image} />
        <div className="contact-div">
          <h1>Tell us about your project</h1>
          <br />
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>
      <h1 className="detail">Contact Details</h1>
      <div className="main">
        <div>
          <p>Main Office</p>
          <br />
          <p>
            Mail : archone@mail.com Address : 1892 Chenoweth Drive TN Phone :
            123-456-3451
          </p>
        </div>
        <div>
          <p>Office II</p>
          <br />
          <p>
            Mail : archtwo@mail.com Address : 3399 Wines Lane TX Phone :
            832-123-4321
          </p>
        </div>
      </div>
    </div>
  );
}
