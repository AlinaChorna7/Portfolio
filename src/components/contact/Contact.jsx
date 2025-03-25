import './Contact.css';
import emailjs from "emailjs-com";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        "laneboi_service",
        "template_laneboi", 
        e.target, 
        "sugkReJOnu6A3DSTY" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!",result);
        },
        (error) => {
          alert("Failed to send message. Please try again later.",error);
        }
      );

    e.target.reset(); 
  };

  return (
    <section id="contact" className="contact-section">
      <h3 className='project-title'>Contact Me</h3>
      <div className='content-container'>
      <div className='contacts-container'>
        <h4 className='contactme'>Where to Find Me</h4>
        <ul className='contact-list'>
          <li className="contacts-item">
            <div>
             <svg width="20px" height="20px" className='contacts-icons loc'>
              <use href='/images/icons.svg#icon-location'/>
             </svg>
             <span>Warsaw, Poland</span>
             </div>
             </li>
          <li className="contacts-item">
            <svg width="20px" height="20px" className='contacts-icons phone'>
              <use href='/images/icons.svg#icon-phone'/>
            </svg>
           < a href='tel:+48796241092'>+48796241092</a>
          </li>
          <li className="contacts-item">
            <svg width="20px" height="20px" className='contacts-icons mail'>
              <use href='/images/icons.svg#icon-email'/>
            </svg>
            <a href='mailto:alina.chorna322@gmail.com'>Alina.chorna322@gmail.com</a> 
            </li>
          <li className="contacts-item">
            <svg width="20px" height="20px" className='contacts-icons git'>
              <use href='/images/icons.svg#icon-github'/>
            </svg>
            <a href='https://github.com/AlinaChorna7' target='_blanc'>My Git Profile</a>
            </li>

          <li className="contacts-item">
            <svg width="20px" height="20px" className='contacts-icons link'>
              <use href='/images/icons.svg#icon-linkedin'/>
            </svg>
            <a href='https://www.linkedin.com/in/alina-chorna/' target='_blanc'>My LinkedIn Profile</a>
            </li>
            
            <li className="contacts-item">
            <svg width="20px" height="20px" className='contacts-icons cv'>
              <use href='/images/icons.svg#icon-cv'/>
            </svg>
            <a href='https://alinachornajsdeveloper.tiiny.site/' target='_blanc'>My CV</a>
            </li>
        </ul>
      </div>
      <div className='form-container'>
        <h4 className='contactme'>Leave your message</h4>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
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
      </div>
      </div>
    </section>
  );
};

export default ContactMe;
