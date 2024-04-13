import { joinClassNames } from '../../utils/helpers';

import styles from './link.module.scss';

export const Link = ({ text = '', ancor, clsNames = '' }) => {
  const addClsNames = () => {
    return clsNames
      .split(' ')
      .map((el) => styles[el])
      .join(' ');
  };

  return (
    <a href={'#' + ancor} className={joinClassNames(styles['link'], addClsNames())}>
      {text}
    </a>
  );
};
