import './aboutMe.css'
import { Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const AboutMe= ()=>{


    return(
        <section id='about' className='about-section'>
            <h3 className='about-title'>About me</h3>
        <div className='about-container'>
            <div className='about-info'>
                <p className='about-text'>I’m Alina Chorna, a dedicated Full-Stack JavaScript Developer with a strong background in building dynamic, efficient, and visually compelling web applications. With a blend of technical expertise and a passion for innovation, I specialize in transforming ideas into high-quality digital solutions that deliver real value.</p>
            <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0"  className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">My Expertise</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
        From crafting seamless user interfaces to developing robust server-side architectures, I excel at every stage of web development. My ability to understand complex problems and create effective solutions ensures that every project I work on meets both technical standards and user expectations.

What sets me apart is my focus on detail and my commitment to continuous improvement. I stay updated with the latest technologies, integrating them into my work to create modern, scalable, and maintainable applications.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"  className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Why Work with Me?</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
        I prioritize clean, maintainable code that ensures long-term success for your projects.
I bring a team-oriented mindset, thriving in collaborative environments.
My approach is both creative and analytical, enabling me to solve problems while crafting designs that users love.
I am committed to meeting project deadlines without compromising on quality.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"  className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">What Inspires Me</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
        Every project is an opportunity to learn, grow, and make an impact. Whether I’m diving into the latest framework or collaborating with a team to deliver on a vision, I find immense satisfaction in the process of building something meaningful.

        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="3">
        <Accordion.Header>Why Work with Me?</Accordion.Header>
        <Accordion.Body>
          Інший текст чи вміст.
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
            </div>
            <div className='skills'>
<ul className='skills-list'>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
    <li className="skills-item"></li>
</ul>
            </div>
        </div>
        </section>
    )
};

export default AboutMe;