import img1 from "../assets/images/Ellipse-102.png";
import img2 from "../assets/images/Layer1.png";
import img3 from '../assets/images/health.png'
import img4 from '../assets/images/group.png'
import img5 from '../assets/images/engineering.png'
import img6 from '../assets/images/tech.png'
import Services from "../components/Services";
import Sectors from "../components/Sectors";
const Landing = () => {
  return (
    <main>
      <section className="hero d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <header>
              <h1 className="h1-font text-center ">
                Enabling Visions <br /> Empowering Businesses
              </h1>
            </header>
          </div>
          <div className="col-lg-12 text-center mt-4">
            <span className="hero-span me-3">Build</span>
            <span className="hero-span me-3">
              <img src={img1} alt="" />
            </span>
            <span className="hero-span me-3">Scale</span>
            <span className="hero-span me-3">
              <img src={img1} alt="" />
            </span>
            <span className="hero-span me-3">Optimize</span>
          </div>
          <button className="hero-btn d-block mt-4">
            Tell us about your project
          </button>
          <div className="icons my-5">
            <div className="container icons-container">
              <div className="row text-center">
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-2">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 text-center">
          <header className="text-start header-font">
            <h2>Services You Can Leverage</h2>
            <p>
              Transform your vision into reality with highly customized
              solutions tailored just for you.
            </p>
          </header>
          <div className="row gy-5 ">
            <div className="col-lg-6">
              <div className="services-container">
                <Services name="Strategic Consultancy" img={img3} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-container">
                <Services name="Solutions" img={img4} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-container">
                <Services name="Product Engineering" img={img5} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-container">
                <Services name="Emerging Tech" img={img6} />
              </div>
            </div>
          </div>
          <button className="mt-4 btn">Explore all services</button>
        </div>
      </section>
      <section className="target-sectors">
        <header className="text-center my-5">
          <h2 className="header-font">Fixed Collaboration For All</h2>
          <p >
            Elevate your business possibilities with a digital masterpiece that
            perfectly aligns your goals.
          </p>
        </header>
        
        <Sectors />

            
      </section>
    </main>
  );
};
export default Landing;
