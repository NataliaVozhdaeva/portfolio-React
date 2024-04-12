import { Navigation } from '../navigation.js/navigaion';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
