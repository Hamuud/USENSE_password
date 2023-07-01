import React from 'react';
import classes from './Section.module.scss';

type Props = {
  strength: string,
};

export const Section: React.FC<Props> = ({ strength }) => {
  const strengthColor = (section: number) => {
    if (strength === 'lessEigth') {
      return '#f7b4bb';
    }

    if (strength === 'easy' && section === 1) {
      return '#f7b4bb';
    }

    if (strength === 'medium' && section !== 3) {
      return '#fddf8e';
    }

    if (strength === 'strong' && section) {
      return '#b1dd9e';
    }

    return '#cdcdcd';
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.strength}
        style={{ background: strengthColor(1) }}
      />
      <div
        className={classes.strength}
        style={{ background: strengthColor(2) }}
      />
      <div
        className={classes.strength}
        style={{ background: strengthColor(3) }}
      />
    </div>
  );
};
