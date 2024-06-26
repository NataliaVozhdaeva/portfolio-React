import { joinClassNames } from '../../utils/helpers';

import styles from './button.module.scss';

export const Btn = ({ type = 'button', text, clsNameMode = '' }) => {
  return (
    <button type={type} className={joinClassNames(styles['btn'], styles[clsNameMode])}>
      {text}
    </button>
  );
};
