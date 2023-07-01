import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <h2>Ooops, looks like a ghost!</h2>
        <h3>
          The page you are looking for can&apos;t be found.
          <br />
          Go home by &nbsp;
          <Link to="/" className={classes.page_not_found}>
            Clicking here!
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
