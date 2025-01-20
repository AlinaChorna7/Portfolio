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
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div>
                </li>
                <li className="projects-item">  <div className='item-container'>
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div></li>
                <li className="projects-item">  <div className='item-container'>
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div></li>
                    <li className="projects-item">  <div className='item-container'>
                        <img/>
                        <h5 className='item-title'></h5>
                        <p className='item-class'></p>
                    </div></li>
                </ul>
            </div>
        </div>
    </section>
)

};
export default Projects;