
import './aboutMe.css';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h3 className="about-title">About me</h3>
      <p className="about-text">
            I’m Alina Chorna, a dedicated Full-Stack JavaScript Developer with a strong background in building dynamic,
            efficient, and visually compelling web applications. With a blend of technical expertise and a passion for
            innovation, I specialize in transforming ideas into high-quality digital solutions that deliver real value.
          </p>
      <div className="about-container">
        <div className="about-info">
         
          <Accordion defaultActiveKey="0" className="custom-accordion">
            <Accordion.Item eventKey="0" className="custom-accordion-item">
              <Accordion.Header className="custom-accordion-header">
                <button className="custom-toggle-btn" type="button">
                  My Expertise
                </button>
              </Accordion.Header>
              <Accordion.Body className="custom-accordion-body">
                From crafting seamless user interfaces to developing robust server-side architectures, I excel at every
                stage of web development. My ability to understand complex problems and create effective solutions
                ensures that every project I work on meets both technical standards and user expectations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="custom-accordion-item">
              <Accordion.Header className="custom-accordion-header">
                <button className="custom-toggle-btn" type="button">
                  Why Work with Me?
                </button>
              </Accordion.Header>
              <Accordion.Body className="custom-accordion-body">
                I prioritize clean, maintainable code that ensures long-term success for your projects. I bring a
                team-oriented mindset, thriving in collaborative environments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="custom-accordion-item">
              <Accordion.Header className="custom-accordion-header">
                <button className="custom-toggle-btn" type="button">
                  What Inspires Me
                </button>
              </Accordion.Header>
              <Accordion.Body className="custom-accordion-body">
                Every project is an opportunity to learn, grow, and make an impact. Whether I’m diving into the latest
                framework or collaborating with a team to deliver on a vision, I find immense satisfaction in the
                process of building something meaningful.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
       
         <div className="skills">
          <h3 className='skills-title'>My tech skills</h3>
          <ul className="skills-list">
            <li className="skills-item">JavaScript (ES6+)</li>
            <li className="skills-item">React</li>
            <li className="skills-item">Node.js & Express</li>
            <li className="skills-item">HTML5 & CSS3</li>
            <li className="skills-item">Version Control (Git)</li>
            <li className="skills-item">API Integration</li>
            <li className="skills-item">Database Management</li>
            <li className="skills-item">Testing</li>
          </ul>
          <h3 className='skills-title'>My soft skills</h3>
          <ul className="skills-list">
            <li className="skills-item">Problem-Solving</li>
            <li className="skills-item">Teamwork</li>
            <li className="skills-item">Time Management</li>
            <li className="skills-item">Adaptability</li>
            <li className="skills-item">Communication</li>
            <li className="skills-item">Attention to Detail</li>
            <li className="skills-item">Creativity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
