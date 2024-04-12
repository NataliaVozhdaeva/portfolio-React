import styles from './link.module.scss';

export const Link = ({ text = '', ancor }) => {
  return (
    <a className={styles['link']} href={'#' + ancor}>
      {text}
    </a>
  );
};
