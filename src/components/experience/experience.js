import { Btn } from '../button/button';

import styles from './experience.module.scss';

export const Experience = () => {
  return (
    <section className={styles.experience}>
      <h3 className={styles.title}>My experience</h3>
      <Btn clsNameMode='experience' />
    </section>
  );
};
