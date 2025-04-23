import styles from './style.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'start' | 'stop';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'start',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.defaultButton} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
