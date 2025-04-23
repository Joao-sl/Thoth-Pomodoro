import styles from './style.module.css';

export function Logo() {
  return (
    <div className={`${styles.logo} FlexCentralized`}>
      <a href='#' className={`${styles.logoLink} FlexCentralized`}>
        {/* <img src='src\assets\logo-thoths.svg' alt='Egyptian God Thoth' /> */}
        <img src='src\assets\r.png' alt='Egyptian God Thoths' />
        <span>Thoth</span>
      </a>
    </div>
  );
}
