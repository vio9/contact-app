import React from "react";

const name = "The Night King";
const avatar =
  "https://pm1.narvii.com/6737/5e5914b9f34f06223979f9bce165f92e5903452ev2_128.jpg";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
