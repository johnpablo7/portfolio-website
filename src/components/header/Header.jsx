import "./header.css";
import ME from "../../assets/me.jpg";
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>John Pablo</h1>
        <h5 className='text-light'>Front end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#footer' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};
