import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    e.target.reset();
  };
    

  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="container">

          <h1 className="contact-title">
            Contact Us
          </h1>

          <p className="contact-subtitle">
            We'd love to hear from you. Whether you have a question,
            feedback, or need support, our team is here to help.
          </p>

        </div>
      </section>


      <section className="contact-details">
  <div className="container">

    <div className="contact-wrapper">

      {/* LEFT SIDE */}
      <div className="contact-info">

        <h2>Get In Touch</h2>

        <div className="info-box">
          <h3>📧 Email</h3>
          <p>support@careerconnect.com</p>
        </div>

        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>+234 XXX XXX XXXX</p>
        </div>

        <div className="info-box">
          <h3>📍 Address</h3>
          <p>Lagos, Nigeria</p>
        </div>

        <div className="info-box">
          <h3>🕒 Working Hours</h3>
          <p>Mon - Fri | 9:00 AM - 5:00 PM</p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="contact-form">

        <h2>Send Message</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your full name" />
<input type="email" placeholder="Enter your email address" />
<input type="text" placeholder="Enter subject (e.g Job enquiry)" />
<textarea placeholder="Write your message here..." rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

    </div>

  </div>
</section>


<section className="socials">
  <div className="container">

    <h2>Follow Us</h2>

    <div className="social-links">

      <a href="#" target="_blank">🔗 LinkedIn</a>
      <a href="#" target="_blank">📘 Facebook</a>
      <a href="#" target="_blank">📸 Instagram</a>
      <a href="#" target="_blank">🐦 X (Twitter)</a>

    </div>

  </div>
</section>
    </>
  );
}

export default Contact;