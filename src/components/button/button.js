import styles from './button.module.css';

export const Btn = ({ type = 'button', mode = 'dark', text }) => {
  return (
    <button type={type} className={styles['btn']}>
      {text}
    </button>
  );
};
