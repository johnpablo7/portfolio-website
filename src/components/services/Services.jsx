import { BiCheck } from "react-icons/bi";
import "./services.css";

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Understand the design to translate it into Front End
                Development.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bring UI design to reality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Create web mockups or prototypes with HTML5, CSS3, Bootstrap5,
                Tailwind.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Programming with JavaScript to give dynamism to the pages either
                by giving life to an animation of a carousel or by returning the
                data from the search system.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Structure the content semantically.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensure accessibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Program, change and maintain a website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Adapt the design of a website to various devices and browsers.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Create tools that improve the interaction between user and web.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use APIs to connect the web with services and systems.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I have knowledge of how to structure and display a site so that
                it is visible on the web.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                The expertise in styling components with amazing fully
                responsive and feature packed designs for a website.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I use the ReactJs library in which I specialize to layout and
                add functionalities and thus be able to offer the best quality
                in projects.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I have obtained all my experience researching, experimenting and
                carrying out personal projects, I like to be responsible and
                productive.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                I would like to work in a development team it would improve and
                broaden my skills as a developer, I continue to practice and
                cooperate with colleagues in a Git workflow while finding my
                first opportunity in the job field.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};
