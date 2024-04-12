import { Header } from './components/header/header';
import { Bio } from './components/bio/bio';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Bio />
    </div>
  );
}

export default App;
