import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='Avatar One' />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              dolorum quam maxime sunt libero deleniti ipsum distinctio aliquam
              accusamus quasi.
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='Avatar One' />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              dolorum quam maxime sunt libero deleniti ipsum distinctio aliquam
              accusamus quasi.
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='Avatar One' />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              dolorum quam maxime sunt libero deleniti ipsum distinctio aliquam
              accusamus quasi.
            </small>
          </div>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='Avatar One' />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              dolorum quam maxime sunt libero deleniti ipsum distinctio aliquam
              accusamus quasi.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};
