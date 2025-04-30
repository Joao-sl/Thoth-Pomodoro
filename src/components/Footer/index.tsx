import style from './style.module.css';
import { MyRouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={style.footer}>
      <MyRouterLink href='/learn-pomodoro'>Learn About Pomodoro Technique 🍅</MyRouterLink>
      <p>
        &copy;Thoth Pomodoro {new Date().getFullYear()} - Made By&nbsp;
        <a href='https://github.com/joao-sl' target='_blank'>
          João
        </a>
      </p>
    </footer>
  );
}
