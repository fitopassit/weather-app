import { Link } from 'react-router-dom';
import styles from '/src/pages/error/index.module.css'
const ErrorPage = () => {
  return (
    <>
      <div className={styles.title}>
        <Link to={'/'}>
          Странички не существует, попробуйте проверить правописание города
        </Link>
      </div>
    </>

  );
};

export default ErrorPage;