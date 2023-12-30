import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <img src="/logo.svg" alt="logo" />
        <span>Zen Rolls</span>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Popular</li>
          <li>Recently</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
