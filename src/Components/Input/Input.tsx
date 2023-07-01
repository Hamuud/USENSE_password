import React, { ChangeEvent, useState } from 'react';
import { Section } from '../Section';
import classes from './input.module.scss';
import { CopyButton } from '../CopyButton/CopyButton';

export const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [strength, setStrength] = useState('');

  const strengthPassword = (value: string) => {
    if (value.length === 0) {
      setStrength('');
    }

    if (value.length < 8) {
      setStrength('lessEigth');
    } else if ((value.length >= 8 && /^\d+$/.test(value))
    || (value.length >= 8 && /^[A-Za-z]+$/.test(value))) {
      setStrength('easy');
    } else if (value.length >= 8 && /[a-zA-Z]/.test(value) && /[0-9]/.test(value) && /[!@#$%^&{}+,.*_-]/.test(value)) {
      setStrength('strong');
    } else {
      setStrength('medium');
    }

    return setStrength;
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();

    setInputValue(value);
    strengthPassword(value);
  };

  return (
    <div>
      <div className={classes.container}>
        <input
          className={classes.input}
          type="text"
          placeholder="Password"
          value={inputValue}
          onChange={handleChangePassword}
          maxLength={32}
        />
        <CopyButton label="Copy" value={inputValue} />
      </div>
      <Section strength={strength} />
    </div>
  );
};
