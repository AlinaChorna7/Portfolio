import './Contact.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Забороняємо перезавантаження сторінки

    emailjs
      .sendForm(
        "your_service_id", // ID вашого сервісу
        "your_template_id", // ID вашого шаблону
        e.target, // Форма
        "your_user_id" // Ваш публічний ключ (API Key)
      )
      .then(
        (result) => {
          alert("Message sent successfully!", result);
        },
        (error) => {
          alert("Failed to send message. Please try again later.", error);
        }
      );

    e.target.reset(); // Очистити форму після відправки
  };

  return (
    <section id="contact" className="contact-section">
      <h3>Contact Me</h3>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
