import { Link } from '../link/link';
import { Btn } from '../button/button';

import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation-list']}>
        <li className={styles['navigation-item']}>
          <Link ancor='skills' text='Skills' />
        </li>
        <li className={styles['navigation-item']}>
          <Link ancor='about' text=' About me' />
        </li>
        <li className={styles['navigation-item']}>
          <Link ancor='experience' text='Projects' />
        </li>
        <li className={styles['navigation-item']}>
          <Link ancor='education' text='Education' />
        </li>
      </ul>
      <Btn text='RU' clsNameMode='btn-lang' />
    </nav>
  );
};
