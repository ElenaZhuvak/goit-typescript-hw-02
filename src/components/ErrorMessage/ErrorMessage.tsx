import { FC } from 'react';
import css from './ErrorMessage.module.css'

const ErrorMessage: FC = () => {
  return (
    <div className={css.errorMessage}>
      <p>Something went wrong</p>
    </div>
  );
};

export default ErrorMessage;
