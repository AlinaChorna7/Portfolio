import './Projects.css';

const Projects = ()=>{

return(
    <section id='projects' className='projects-section'>
        <div className='projects-container'>
            <div className='projects-header'>
                <h3 className='projects-title'>My projects</h3>
                <p className='projects-text'>Discover a curated collection of projects I’ve worked on, including both solo ventures and collaborative efforts. These projects reflect my journey in web development and my commitment to delivering high-quality, user-friendly solutions.</p>
            </div>
            <div className='projects-list-container'>
                <ul className='projects-list'>

                <li className="projects-item">
                    <div className='item-container'>
                        <img src='/images/wed.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://nodejs-hw-mongodb-9-8uwf.onrender.com/api-docs/'   target='_blanc' ><h3 className='item-title'>Contacts App</h3></a>
                        <a target='_blanc' href='https://github.com/AlinaChorna7/nodejs-hw-mongodb' className='git-repo'>Git repository</a>
                        <p className='item-class'>A robust backend application built with Node.js and Express.js, utilizing MongoDB as the NoSQL database. The project includes a fully documented API using Swagger for seamless interaction and testing. Designed for scalability, performance, and maintainability.</p>
                    </div>
                </li>
                <li className="projects-item">  <div className='item-container'>
                        <img src='/images/jefferson.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://mogilevs.github.io/project4/'   target='_blanc' ><h3 className='item-title'>Lloyd Jefferson Portfolio</h3></a>
                        <a target='_blanc' href='https://github.com/mogilevs/project4' className='git-repo'>Git repository</a>
                        <p className='item-class'>An interactive and fully responsive portfolio website developed with JavaScript, featuring modern libraries like Swiper for smooth carousels and Accordion for dynamic content presentation. The project emphasizes adaptive design, ensuring an excellent user experience across various devices.</p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img src='/images/nutritionist.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://nutritionist-xi.vercel.app/'   target='_blanc' ><h3 className='item-title'>Nutritionist</h3></a>
                        <a target='_blanc' href='https://github.com/AlinaChorna7/NUTRITIONIST' className='git-repo'>Git repository</a>
                        <p className='item-class'>A React-based web application designed for personalized nutrition coaching. The platform offers user-friendly interfaces, dynamic content rendering, and responsive design to deliver tailored meal plans and nutrition advice.</p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img src='/images/movie.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://goit-reach-hw-05.vercel.app/'   target='_blanc' ><h3 className='item-title'>Movie Searching App</h3></a>
                        <a target='_blanc' href='https://github.com/AlinaChorna7/goit-reach-hw-05' className='git-repo'>Git repository</a>
                        <p className='item-class'>A feature-rich movie search application built with React, incorporating API requests to fetch movie data and backend integration for seamless functionality. The app offers an adaptive design for a smooth user experience on any device, along with dynamic routing, search capabilities, and detailed movie information pages.</p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img src='/images/organic.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://valeriia-danilo.github.io/training-project/'   target='_blanc' ><h3 className='item-title'>Green Harvest</h3></a>
                        <a target='_blanc' href='https://github.com/Valeriia-Danilo/training-project' className='git-repo'>Git repository</a>
                        <p className='item-class'>A responsive online vegetable store developed with JavaScript, offering a seamless shopping experience. The project features an intuitive user interface, dynamic product listings, interactive cart functionality, and adaptive design to ensure compatibility across all devices.</p>
                    </div></li>
                    <li className="projects-item">  <div className='item-container'>
                        <img src='images/water.png' alt='screenshot of hero' className='project-images'/>
                        <a href='https://yastigma.github.io/the-DOMinators-frontend-project/'   target='_blanc' ><h3 className='item-title'>Water Tracker</h3></a>
                        <a target='_blanc' href='https://github.com/Plotvochka/the-DOMinators-back-project' className='git-repo'>Git repository</a>
                        <p className='item-class'>A comprehensive water intake tracking application built with React and Redux for state management, and a custom backend developed using Node.js. The app allows users to log and monitor their daily water consumption, providing interactive charts and progress insights. With responsive design and secure backend integration, it ensures a smooth and reliable user experience.</p>
                    </div></li>
                </ul>
            </div>
        </div>
    </section>
)

};
export default Projects;