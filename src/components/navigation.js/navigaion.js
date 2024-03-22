// import './navigation.module.css';
import styles from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav classNames={styles['navigation']}>
      <ul className={styles['navigation-list']}>
        <li className={styles['navigation-item']}>
          <a className={styles['link']} href='#skills'>
            Skills
          </a>
        </li>
        <li className={styles['navigation-item']}>
          <a className={styles['link navigation-link']} href='#about'>
            About me
          </a>
        </li>
        <li className={styles['navigation-item']}>
          <a className={styles['link navigation-link']} href='#experience'>
            Projects
          </a>
        </li>
        <li className={styles['navigation-item']}>
          <a className={styles['link navigation-link']} href='#education'>
            Education
          </a>
        </li>
        <li className={styles['navigation-item']}>
          <a className={styles['link navigation-link']} href='#code'>
            Code example
          </a>
        </li>
      </ul>
      <button className={styles['link btn language-btn']}>RU</button>
    </nav>
  );
};
