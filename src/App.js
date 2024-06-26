import { Header } from './components/header/header';
import { Main } from './components/main/main';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
