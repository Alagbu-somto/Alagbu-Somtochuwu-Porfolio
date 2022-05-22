// CgFigma
import { CgFigma } from "react-icons/cg";
import {
  FaReact,
  FaNode,
  FaWordpress,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiVisualstudiocode,
} from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

import { SlideLeft, RotateXaxis, ShadowOnHover, ScaleOnhover } from "./Animate";
function Services() {
  return (
    <section className="services-section">
      <SlideLeft>
        <h3>My Services | Skills | Tools</h3>
        <h2>What I Do __</h2>
      </SlideLeft>
      <div className="service-container">
        <RotateXaxis>
          <ShadowOnHover>
            <div className="service-box">
              <div>
                <FaReact
                  style={{ color: "white", fontSize: "40px" }}
                  className="mx-3 mt-3 m"
                />
              </div>
              <h3>Front-end development</h3>
              <p>
                I build attractive, responsive and pixel perfect designs for my
                clients. I enjoy bringing ideas alive with code and I always aim
                towards client satisfaction.
              </p>
            </div>
          </ShadowOnHover>
        </RotateXaxis>
        <RotateXaxis>
          <ShadowOnHover>
            <div className="service-box">
              <div>
                <FaNode
                  style={{ color: "white", fontSize: "40px" }}
                  className="mx-3 mt-3"
                />
              </div>
              <h3>Back-end development</h3>
              <p>
                I write clean and efficient code, providing logical solutions
                and building out server side logic to meet my clients needs. My
                goal is to provide buisness solutions for my clients .
              </p>
            </div>
          </ShadowOnHover>
        </RotateXaxis>
        <RotateXaxis>
          <ShadowOnHover>
            <div className="service-box">
              <div>
                {" "}
                <CgFigma
                  style={{ color: "white", fontSize: "40px" }}
                  className="mx-3 mt-3 m"
                />
              </div>
              <h3>UI & UX Design</h3>
              <p>
                I create beautiful wireFrames and UI Designs for your product
                and business needs. I enjoy designing part-time too, my design
                process is really simple, I Idealize, Visualize then Create and
                Most times Code as well.
              </p>
            </div>
          </ShadowOnHover>
        </RotateXaxis>
      </div>
      <section>
        <h2>My Stack & Tools __</h2>
        <div className="skill-box">
          <ScaleOnhover>
            <div>
              <CgFigma
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3 m"
              />
              <p>Figma</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <SiVisualstudiocode
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3 m"
              />
              <p>Visual studio code</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <FaReact
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3 m"
              />
              <p>React</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <FaNode
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Node.js</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <FaWordpress
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Wordpress</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <FaBootstrap
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Bootstrap</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <FaHtml5
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>HTML5</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <FaCss3
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Css3</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <SiJavascript
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Javascript</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <SiTailwindcss
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Tailwindcss</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <SiNextdotjs
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Nextjs</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <SiMongodb
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Mongodb</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <SiTypescript
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Typescript</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div className="">
              <SiRedux
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Redux</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <SiExpress
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Express js</p>
            </div>
          </ScaleOnhover>
          <ScaleOnhover>
            <div>
              <AiOutlineGithub
                style={{ color: "white", fontSize: "40px" }}
                className="mx-3 mt-3"
              />
              <p>Git&Github</p>
            </div>
          </ScaleOnhover>
        </div>
      </section>
    </section>
  );
}

export default Services;
