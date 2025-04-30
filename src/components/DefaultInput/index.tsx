import styles from './style.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ type, id, labelText, ...props }: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor={id} className={styles.defaultLabel}>
          {labelText}
        </label>
      )}
      <input id={id} type={type} {...props} className={styles.defaultInput} />
    </>
  );
}
