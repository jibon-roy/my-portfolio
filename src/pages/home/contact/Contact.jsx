import emailjs from "@emailjs/browser";
import { useState } from "react";
import Heading from "../../../components/heading/Heading";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const public_key = "-6PBeFtgF-NOoRFms";
    const serviceID = "service_a9486ln";
    const templateID = "template_d85urrl";

    try {
      emailjs.init(public_key);

      // console.log('Public Key:', public_key);
      // console.log('Service ID:', serviceID);
      // console.log('Template ID:', templateID);
      // console.log('Form Data:', formData);

      const response = await emailjs.send(serviceID, templateID, formData);

      console.log("Email sent:", response);
      // alert('Email sent successfully!');
      Swal.fire({
        title: "Done!",
        text: "Email sent successfully!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      // alert('Error sending email');
      Swal.fire({
        title: "Failed!",
        text: "Opps, email sent failed!",
        icon: "error",
      });
    }
  };

  return (
    <section className="container mx-auto py-12 text-white">
      <Heading subject={"Contact Me"}></Heading>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Your name"
            onChange={handleChange}
            className="w-full p-2  border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Your email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-white text-sm font-bold mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your messege..."
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
