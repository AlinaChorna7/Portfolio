
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
         <div className='languages-tech'>
    <h4 className='tech-lang'>Programming Languages:</h4>
  <ul className='skills-list'>
    <li className='skills-item'>
     <svg width="20px" height="20px" className='lang-icon'>
      <use href='/images/skills.svg#icon-javascript'/>
     </svg>
     <p className='skills-lang'>JavaScript</p>
    </li>
    <li className='skills-item'>
    <svg width="20px" height="20px" className='lang-icon'>
      <use href='/images/skills.svg#icon-typescript'/>
     </svg>
     <p className='skills-lang'>TypeScript</p>
    </li>
  </ul>
  </div>
  <div className='front-skills'>
    <h4 className="front-title">Frontend:</h4>
    <ul className='front-skills-list'>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-htmx'/>
          
        </svg>
        <p className='front-tech'>HTML&CSS</p>
      </li>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-react-svgrepo-com'/>
        </svg>
        <p className='front-tech'>React</p>
        </li>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-redux'/>
        </svg>
        <p className='front-tech'>Redux</p>
        </li>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-web-design-svgrepo-com'/>
        </svg>
        <p className='front-tech'>Responsive/Adaptive Design</p>
        </li>
    </ul>
  </div>
  <div className='front-skills'>
    <h4 className="front-title">Backend:</h4>
    <ul className='front-skills-list'>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-nodedotjs'/>
          
        </svg>
        <p className='front-tech'>Node.js&Express.js</p>
      </li>
  
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-database-svgrepo-com'/>
        </svg>
        <p className='front-tech'>MongoDB</p>
        </li>
      <li className='fromt-item'>
        <svg width="20px" height="20px" className='front-icon'>
          <use href='/images/skills.svg#icon-rest-api-svgrepo-com'/>
        </svg>
        <p className='front-tech'>REST API</p>
        </li>
      
    </ul>
  </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
