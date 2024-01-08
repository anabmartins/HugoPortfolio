import styles from './page.module.css';

const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <p className={styles.name}>Hugo</p>
      <div className={styles.nav}>
        <p>sobre</p>
        <p>atuação</p>
        <p className={styles.contact}>contato</p>
      </div>
    </header>
    </>
  )
}

export default Header;