import { ToastContentProps } from 'react-toastify';

import styles from './styles.module.css';
import { DefaultButton } from '../DefaultButton';
import { CheckIcon, XIcon } from 'lucide-react';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.confirmWrapper}>
        <h3>{data}</h3>

        <div className={styles.buttonsWrapper}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<CheckIcon />}
            title='Confirm and close'
            aria-label='Confirm and close'
            color='confirm'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<XIcon />}
            title='Cancel and close'
            aria-label='Cancel and close'
            color='stop'
          />
        </div>
      </div>
    </>
  );
}
