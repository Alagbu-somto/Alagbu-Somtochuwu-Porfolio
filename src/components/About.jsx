import profileImage from "../images/1652635767755.jpg";
import { SlideLeft, SlideUp } from "./Animate";
function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-img-container">
        <SlideLeft>
          <img src={profileImage} alt="" />
        </SlideLeft>
      </div>
      <div className="about-text">
        <SlideUp>
          <h3>About Me</h3>
          <h2>Who I Am __</h2>
          <p>
            I'm Alagbu Somtochukwu a talentend curiousity-driven fullStack
            developer with a love to explore and try out new things and new
            tools. I love building beautiful and responsive UI designs and
            animations that makes for a good user experience. I care about
            details, writing clean code and customer satisfaction.
          </p>
        </SlideUp>
        <SlideUp>
          <p>
            I also enjoy building robust,secured and scalable applications and
            I'm well experieced in backend technologies and API development.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}

export default About;
