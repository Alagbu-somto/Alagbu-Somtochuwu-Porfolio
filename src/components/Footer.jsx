import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="https://www.linkedin.com/in/alagbu-somtochukwu-06399a200">
        <AiFillLinkedin style={{ color: "#fff", fontSize: "20px" }} />
      </a>

      <a href="https://github.com/Alagbu-somto">
        <AiFillGithub style={{ color: "#fff", fontSize: "20px" }} />
      </a>

      <a href="https://twitter.com/Mrstephen19?t=Tgqjwz-iHHqIW0JSjmLKcw&s=09">
        <AiFillTwitterCircle style={{ color: "#fff", fontSize: "20px" }} />
      </a>

      <p class="text-center pb-3 small">© 2022 ALAGBU SOMTOCHUKWU.</p>
    </footer>
  );
}

export default Footer;
