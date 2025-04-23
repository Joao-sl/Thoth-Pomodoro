import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href='#'>Learn About Pomodoro Technique 🍅</a>
      <p>
        &copy;Thoth Pomodoro {new Date().getFullYear()} - Made By&nbsp;
        <a href='https://github.com/joao-sl' target='_blank'>
          João
        </a>
      </p>
    </footer>
  );
}
