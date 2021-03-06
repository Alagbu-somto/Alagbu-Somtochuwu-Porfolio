import intro from "../images/light-symmetry-triangle-.png";
import introTech from "../images/jing.fm-hurdler-clip-art-3372397.png";
import { FadeInWhenVisible, FadeInWhenVisible1 } from "./Animate";
function Intro() {
  return (
    <section className="intro-container">
      <img src={intro} alt="" className="img-intro" />
      <div className="intro-section">
        <div className="intro">
          <FadeInWhenVisible>
            <h3>Hi !</h3>
            <h1>I'm Alagbu Somtochukwu</h1>
            <h3>Full-Stack Developer</h3>
            <p>
              I'm an Experiened Full-Stack developer and I'm passionate about
              building beautiful UI designs, User interactions and solving
              logical problems with code.
            </p>
            <button>
              <a href="#work">View my work</a>
            </button>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible1>
          <img src={introTech} alt="" />
        </FadeInWhenVisible1>
      </div>
    </section>
  );
}

export default Intro;
