import { useEffect, useState } from 'react';
import { useSelector } from '../../services/hooks';
import styles from './errorBlock.module.css';

export const ErrorBlock = () => {
  const errorMessage = useSelector((store) => store.errorMessage);
  const [errorMessageClassName, setErrorMessageClassName] = useState(styles.errorBlock);

  useEffect(() => {
    errorMessage && setErrorMessageClassName(`${styles.errorBlock} ${errorMessage && styles.errorBlock_show}`);
  }, []);

  return (
    <div className={errorMessageClassName}>
      <p className="text text_type_main-default">{errorMessage}</p>
    </div>
  );
};