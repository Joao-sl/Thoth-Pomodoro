import { MyRouterLink } from '../RouterLink';
import styles from './style.module.css';

export function Logo() {
  return (
    <div className={`${styles.logo} FlexCentralized`}>
      <MyRouterLink href='/' className={`${styles.logoLink} FlexCentralized`}>
        <img src='src\assets\r.png' alt='Egyptian God Thoths' />
        <span>Thoth</span>
      </MyRouterLink>
    </div>
  );
}
