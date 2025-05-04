import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mundo <span>Psicanalítico</span>
      </h2>
      <p>Esse projeto consiste em um mini blog feito em React e Firebase</p>
      <Link to="/posts/create" className="btn">
        Criar Artigo
      </Link>
    </div>
  );
};

export default About;
