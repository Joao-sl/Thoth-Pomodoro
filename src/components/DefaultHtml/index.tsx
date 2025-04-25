import styles from './style.module.css';

type DefaultHtmlProps = {
  children: React.ReactNode;
};

export function DefaultHtml({ children }: DefaultHtmlProps) {
  return <div className={styles.defaultHtml}>{children}</div>;
}
