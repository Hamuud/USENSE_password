import React from 'react';
import classes from './CreatePassword.module.scss';
import { Input } from '../../Components/Input';
import lock from '../../img/lock.svg';

const CreatePassword = () => {
  const {
    container,
    pass__container: passContainer,
  } = classes;

  return (
    <div className={container}>
      <div className={passContainer}>
        <div className={classes.img__container}>
          <img
            className={classes.img}
            src={lock}
            alt="Create own password"
          />
        </div>
        <div>
          <h2>Create own password:</h2>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
