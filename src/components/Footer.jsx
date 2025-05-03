import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div id={styles.footer_content}>
        <div id={styles.footer_contacts}>
          <img src="/logo.svg" alt="logo" className={styles.logo} />
          <p>Mundo Psicanalítico</p>
          <div id={styles.footer_social_media}>
            <a href="#" className={styles.footer_link} id={styles.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className={styles.footer_link} id={styles.facebook}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className={styles.footer_link} id={styles.whatsapp}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <ul className={styles.footer_list}>
          <li>
            <h3>Veja também</h3>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Site
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Forum
            </a>
          </li>
        </ul>
        <ul className={styles.footer_list}>
          <li>
            <h3>Fique atento</h3>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Contato
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_link}>
              Privacidade & Termos
            </a>
          </li>
        </ul>
        <div id={styles.footer_subscribe}>
          <h3>Inscreva-se</h3>
          <p>Entre com seu e-mail para novas notificações</p>
          <div id={styles.input_group}>
            <input type="email" id="email" />
            <button>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <div id={styles.footer_copyright}>&#169; 2025 all rights reserved</div>
    </footer>
  );
};

export default Footer;
