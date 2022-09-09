import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Richard | Freelancer Portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18363312-Richard-Freelancer-Portfolio",
  },
  {
    id: 2,
    image: IMG2,
    title: "Developer portfolio 1",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17242255-Developer-portfolio-1",
  },
  {
    id: 3,
    image: IMG3,
    title: "Photography Web Header",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19283784-Photography-Web-Header",
  },
  {
    id: 4,
    image: IMG4,
    title: "UI/UX Designer | Portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19287807-UI-UX-Designer-Portfolio",
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio | Landing Page",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17341529-Portfolio-Landing-Page",
  },
  {
    id: 6,
    image: IMG6,
    title: "Fisma - Creative Agency Landing Page",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18051436-Fisma-Creative-Agency-Landing-Page",
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
