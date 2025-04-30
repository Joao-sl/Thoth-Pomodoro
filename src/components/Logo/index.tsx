import { MyRouterLink } from '../RouterLink';
import styles from './style.module.css';

export function Logo() {
  return (
    <div className={`${styles.logo} FlexCentralized`}>
      <MyRouterLink href='/' className={`${styles.logoLink} FlexCentralized`}>
        {/* <img src='src\assets\logo-thoths.svg' alt='Egyptian God Thoth' /> */}
        <img src='src\assets\r.png' alt='Egyptian God Thoths' />
        {/* <img src='src\assets\s.png' alt='Egyptian God Thoths' /> */}
        <span>Thoth</span>
      </MyRouterLink>
    </div>
  );
}
