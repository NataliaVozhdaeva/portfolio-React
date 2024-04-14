import styles from './skillset.module.scss';

export const Skillset = () => {
  return (
    <section className={styles['skills']}>
      <h2 className={styles['skills-title']}>Skills</h2>
      <ul className={styles['skills-list']}>
        <li className={styles['skills-item']}>React (Redux)</li>
        <li className={styles['skills-item']}>BEM</li>
        <li className={styles['skills-item']}>JavaScript, TypeScript</li>
        <li className={styles['skills-item']}>REST API;</li>
        <li className={styles['skills-item']}>Gulp, Webpack, Vite</li>
        <li className={styles['skills-item']}>GIT</li>
        <li className={styles['skills-item']}>HTML5, CSS3 (Flex, Grid, SCSS)</li>
        <li className={styles['skills-item']}>OOP</li>
        <li className={styles['skills-item']}>Figma, Photoshop</li>
        <li className={styles['skills-item']}>
          <ul className={styles['languages-list']}>
            <li className={styles['languages-item']}>
              <h4 className={styles['languages-title']}>Languages:</h4>
            </li>
            <li className={styles['languages-item']}>English (B1+)</li>
            <li className={styles['languages-item']}>Italian (A1)</li>
            <li className={styles['languages-item']}>Russian (Native)</li>
          </ul>
        </li>
      </ul>
      <div className={styles['about']}>
        <h3 className={styles['about-title']}>A little bit more about me</h3>
        <p>
          Have a degree in journalism. Began to be interested in programming at school, but at that time we had
          programming lessons just in a graduate year, and that wasn't enough to enter university. I was trying to study
          just with the Internet, and in 2020 understood that need a system education, and started courses. Take part in
          the game "What? Where? When?" (something like “Jeopardy”, but with the team), sort the garbage, inspired by
          pixel-perfect, which match from the first time, like knitting and cats.
        </p>
      </div>
    </section>
  );
};
