import classes from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav class='navigation'>
      <ul class='list navigation-list'>
        <li class='navigation-item'>
          <a class='link navigation-link' href='#skills'>
            Skills
          </a>
        </li>
        <li class='navigation-item'>
          <a class='link navigation-link' href='#about'>
            About me
          </a>
        </li>
        <li class='navigation-item'>
          <a class='link navigation-link' href='#experience'>
            Projects
          </a>
        </li>
        <li class='navigation-item'>
          <a class='link navigation-link' href='#education'>
            Education
          </a>
        </li>
        <li class='navigation-item'>
          <a class='link navigation-link' href='#code'>
            Code example
          </a>
        </li>
      </ul>
      <button class='link btn language-btn'>RU</button>
      {/* <div class='popup'>
  Something has gone wrong, but I'm already working on it. Please, try again later or write me, if you need it
  right now */}
    </nav>
  );
};
