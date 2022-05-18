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
      <div className="">
        <SlideUp>
          <h3>About Me</h3>
          <h2>Who I Am __</h2>
          <p>
            My journey as a full-stact developer started with playing around
            with wordpress, my love for exporing and learing new things about
            the Tech industry drove me to keep picking up new skills untill i
            landed myself at the position of a full-stack developer.
          </p>
        </SlideUp>
        <SlideUp>
          <p>
            As a full-stack engineer and web developer i enjoy building
            robust,secured and scalable applications, i love building
            beutiful,responsive UI designs and animations that makes for a good
            user experience,I also enjoy coding the logic side of things and I'm
            well experieced in backend technologies and API development.
          </p>
        </SlideUp>
      </div>
    </section>
  );
}

export default About;
