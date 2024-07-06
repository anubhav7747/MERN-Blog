import axios from "axios";
import React, { useState } from "react";

const ContactSectionRestAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // emailjs
    const serviceId = "service_w8mm6jg";
    const templateId = "template_x1twg1f";
    const publicKey = "FRvXaLaWUlbcdwzXe";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      templateparams: {
        from_name: name,
        from_email: email,
        to_name: "Anubhav Tiwari",
        message: message,
      },
    };

    try {
        const res= await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        console.log(res.data);
        setName("");
        setEmail("");
        setMessage("");
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm flex flex-col p-10">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactSectionRestAPI;
