import { Link } from '../link/link';

import styles from './bio.module.scss';

export const Bio = () => {
  return (
    <section className={styles['section-bio']}>
      <h1 hidden>Natalia Vozhdaeva</h1>
      <div className={styles['summary-container']}>
        <img
          className={styles['summary-photo']}
          src='./images/content-imgs/1.png'
          alt="It's me"
          title='Hi!'
          width='300'
        />
        <div className={styles['summary']}>
          <h2 className={styles['summary-title']}>Hi, I'm Natalia!</h2>
          <h3 className={styles['header-subtitle']}>Frontend Developer</h3>
          <div className={styles['summary-text']}>
            I'm a Front-end Developer with experience in HTML, CSS, Javascript and TypeScript – Including OOP and the
            ability to deliver pixel-perfect and adaptive layouts. Created several landing pages (with interactive
            elements, such as pagination, carousels, burger menus, virtual keyboard, etc), two apps using React, two SPA
            with pure JS and two with TS, developed a lot of single fragment stuff, such as comment-form, goods cards,
            accordion, etc. Was a member of a teams, which developed construction investment application and crypto
            startup. I have been developing since 2020. Have a bit of experience with React and Angular. Love coding,
            love work, and love to communicate. I'm a quick learner and have got high attention to detail. Adaptable,
            driven, and responsible.
          </div>
        </div>
      </div>
      <ul className={styles['contact-list']}>
        <li className={styles['contact-item']}>
          <Link
            ancor='https://www.linkedin.com/in/nataliavozhdaeva'
            clsNames='contact-link linkedin'
            attrName='aria-label'
            attrValue='contact-linkedin'
          />
        </li>
        <li className={styles['contact-item']}>
          <Link
            ancor='https://github.com/NataliaVozhdaeva/'
            clsNames='contact-link github'
            attrName='aria-label'
            attrValue='contact-github'
          />
        </li>
        <li className={styles['contact-item']}>
          <Link
            ancor='mailto:NataliaVVozhdaeva@gmail.com'
            clsNames='contact-link mail'
            attrName='aria-label'
            attrValue='contact-mail'
          />
        </li>
      </ul>
    </section>
  );
};
