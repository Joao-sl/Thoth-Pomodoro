import styles from './styles.module.css';

type ContentWrapper = {
  children: React.ReactNode;
};

export function ContentWrapper({ children }: ContentWrapper) {
  const classNames = `${styles.ContentWrapper}`;

  return <div className={`${classNames}`}>{children}</div>;
}
