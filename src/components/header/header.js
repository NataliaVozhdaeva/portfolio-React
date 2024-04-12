import { Navigation } from '../navigation.js/navigaion';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

/* 
      
      <div class='summary-container'>
        <img class='summary-photo img' src='./assets/img/1.png' alt="It's me" title='Hi!' width='300' />
        <div class='summary-text'>
          <h1 class='header-title summary-title'>Hi, I'm Natalia!</h1>
          <h2 class='header-subtitle'>Frontend Developer / HTML-coder</h2>
          <div class='header-text summary'>
            I'm a Front-end Developer with experience in HTML, CSS, Javascript and TypeScript – Including OOP and the
            ability to deliver pixel-perfect and adaptive layouts. Created more than 10 landing pages (with interactive
            elements, such as pagination, carousels, burger menus, virtual keyboard, etc), two apps using React, two SPA
            with pure JS and two with TS, developed a lot of single fragment stuff, such as comment-form, goods cards,
            accordion, etc. Was a member of a teams, which developed construction investment application and crypto
            startup. I have been developing since 2020. Have a bit of experience with React and Angular. Love coding,
            love work, and love to communicate. I'm a quick learner and have got high attention to detail. Adaptable,
            driven, and responsible.
          </div>
        </div>
      </div>
      <ul class='list contact-list'>
        <li class='contact-item'>
          <a
            class='link contact-link linkedin'
            href='https://www.linkedin.com/in/nataliavozhdaeva/'
            aria-label='contact-linkedin'></a>
        </li>
        <li class='contact-item'>
          <a
            class='link contact-link github'
            href='https://github.com/NataliaVozhdaeva/'
            aria-label='contact-github'></a>
        </li>
        <li class='contact-item'>
          <a class='link contact-link mail' href='mailto:NataliaVVozhdaeva@gmail.com' aria-label='contact-mail'></a>
        </li>
      </ul>
    */
