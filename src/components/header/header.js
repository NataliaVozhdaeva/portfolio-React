import { Navigation } from '../navigation/navigaion';
import { Bio } from '../bio/bio';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <Bio />
    </header>
  );
};
