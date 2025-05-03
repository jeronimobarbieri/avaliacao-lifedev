import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../contexts/AuthContext";
import menuIcon from "../assets/img/menu_white_36dp.svg";
import closeIcon from "../assets/img/close_white_36dp.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>
            <img src="/logo.svg" alt="logo" className={styles.logo} />
          </h1>
        </div>

        <div className={styles.navList}>
          <ul>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                Página Inicial
              </NavLink>
            </li>
            {!user && (
              <>
                <li className={styles.navItem}>
                  <NavLink to="/login" className={styles.navLink}>
                    Entrar
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/register" className={styles.navLink}>
                    Cadastrar
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className={styles.navItem}>
                  <NavLink to="/posts/create" className={styles.navLink}>
                    Novo Artigo
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/dashboard" className={styles.navLink}>
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}

            <li className={styles.navItem}>
              <NavLink to="/about" className={styles.navLink}>
                Sobre
              </NavLink>
            </li>
            {user && (
              <li className={styles.navItem}>
                <button onClick={logout} className={styles.navLink}>
                  Sair
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className={styles.mobileMenuIcon}>
          <button onClick={toggleMenu}>
            <img
              className={styles.icon}
              src={menuOpen ? closeIcon : menuIcon}
              alt="Ícone menu"
            />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.navItem}>
            <NavLink to="/" className={styles.navLink}>
              Página Inicial
            </NavLink>
          </li>
          {!user && (
            <>
              <li className={styles.navItem}>
                <NavLink to="/login" className={styles.navLink}>
                  Entrar
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/register" className={styles.navLink}>
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li className={styles.navItem}>
                <NavLink to="/posts/create" className={styles.navLink}>
                  Novo Artigo
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/dashboard" className={styles.navLink}>
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li className={styles.navItem}>
            <NavLink to="/about" className={styles.navLink}>
              Sobre
            </NavLink>
          </li>
          {user && (
            <li className={styles.navItem}>
              <button onClick={logout} className={styles.navLink}>
                Sair
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
