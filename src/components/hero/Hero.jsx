
import './hero.css';


const Hero = ()=>{
return(
    <>
    <section className="hero">
        <div className="hero-container">
            <h1 className="hero-title">Hi! I`m Alina Chorna, Full-Stack JavaScript Developer. </h1>
            <h3 className="hero-text">Turning Ideas Into Functional Code.</h3>
        </div>
        <div className='portfolio-image'>
            {/* <img  className="portfolio-image" src='/images/portfolio-photo.jpg'/> */}
        </div>

    </section>
    </>
)



};

export default Hero;