import React from 'react';
import classes from './CopyButton.module.scss';

type Props = {
  label: string;
  value?: string;
};

export const CopyButton: React.FC<Props> = ({ label, value }) => {
  return (
    <div className={classes.container}>
      <button
        type="button"
        className={classes.copy_button}
        onClick={() => navigator.clipboard.writeText(`${value}`)}
      >
        {label}
      </button>
    </div>
  );
};
