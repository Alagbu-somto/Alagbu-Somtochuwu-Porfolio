import projectImage from "../images/headphones_b_1.webp";
import projectImage1 from "../images/1652857468144.jpg";
import projectImage2 from "../images/x-sLGYaQ_stMM-unsplash.jpg";
import projectImage3 from "../images/vadim-bogulov-MfBnqUOz_qY-unsplash.jpg";
import { SlideUp, SlideLeft, ScaleOnhover } from "./Animate";
import { GrSend } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";

function Projects() {
  return (
    <section className="project-section" id="work">
      <SlideLeft>
        <div className="project-title">
          <h3>My Work</h3>
          <h2>Some Things I’ve Built</h2>
        </div>
      </SlideLeft>
      <SlideUp>
        <div className="project-container">
          <div className="project-text ">
            <h3>E-commerce Store</h3>
            <div>
              <p>
                I built an eletronics ecommerce store for a client friend to
                help him promote his buisness on the web.
              </p>
              <p>
                <b>Nextjs, Sanity</b>
              </p>
              <a href="https://github.com/Alagbu-somto/E-commerce-website">
                <AiOutlineGithub style={{ fontSize: "25px" }} />
              </a>
              <a href="https://e-commerce-webstore.vercel.app/">
                <GrSend style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src={projectImage} alt="" />
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="project-container1">
          <div className="project-box">
            <img src={projectImage1} alt="" />
          </div>
          <div className="project-text1 ">
            <h3>Real-estate</h3>
            <div>
              <p>
                I love the real-estate industry, so I built a web app that
                allows you to search diffrent apartments according to your
                needs.
              </p>
              <p>
                <b>Nextjs, ChakraUI API</b>
              </p>
              <a href="https://github.com/Alagbu-somto/Real-estate">
                <AiOutlineGithub style={{ fontSize: "25px" }} />
              </a>
              <a href="https://real-estate-two-nu.vercel.app/">
                <GrSend style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="project-container">
          <div className="project-text ">
            <h3>MakeUp Template Site</h3>
            <div>
              <p>
                I created a builtiful sigle-page makeUP site template to help a
                client promote her buiness.
              </p>
              <p>
                <b>Nextjs, Tailwind</b>
              </p>
              <a href="https://github.com/Alagbu-somto/makeUP-Template-site">
                <AiOutlineGithub style={{ fontSize: "25px" }} />
              </a>
              <a href="https://repo-beige.vercel.app/">
                <GrSend style={{ fontSize: "25px" }} />
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src={projectImage2} alt="" />
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="project-container1">
          <div className="project-box">
            <img src={projectImage3} alt="" />
          </div>
          <div className="project-text1 ">
            <h3>Qiuz Game</h3>
            <div>
              <p>
                I find games very intresting, so i decided to build a game that
                can be fun and educative at thesame time.
              </p>
              <p>
                <b>React, Typescript, Ant-design, API</b>
              </p>
              <a href="https://github.com/Alagbu-somto/QiuzGame">
                <AiOutlineGithub style={{ fontSize: "28px" }} />
              </a>
              <a href="https://magnificent-truffle-1418fd.netlify.app/">
                <GrSend style={{ fontSize: "28px" }} />
              </a>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

export default Projects;
