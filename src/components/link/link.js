import styles from './link.module.css';

export const Link = ({ text, ancor }) => {
  return (
    <a className={styles['link']} href={'#' + ancor}>
      {text}
    </a>
  );
};
