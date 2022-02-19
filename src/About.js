import aboutImg from "./img/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis fuga, ratione distinctio a numquam quia,
                necessitatibus ipsa optio vitae dolorem, iure. Vitae ut officiis
                ex quam optio dignissimos voluptates, minus. Eveniet odit libero
                sequi, fugiat debitis quae qui cum magni iste saepe aliquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                cum, officiis blanditiis vitae laboriosam quaerat neque.
              </p>
              <p className="about__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis fuga, ratione distinctio a numquam quia,
                necessitatibus ipsa optio vitae dolorem, iure. Vitae ut officiis
                ex quam optio dignissimos voluptates, minus. Eveniet odit libero
                sequi, fugiat debitis quae qui cum magni iste saepe aliquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                cum, officiis blanditiis vitae laboriosam quaerat neque.
              </p>
              <p className="about__text p__color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis fuga, ratione distinctio a numquam quia,
                necessitatibus ipsa optio vitae dolorem, iure. Vitae ut officiis
                ex quam optio dignissimos voluptates.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="a">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="a">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
