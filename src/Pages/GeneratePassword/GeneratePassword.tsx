import React, { useEffect, useState } from 'react';
import classes from './GeneratePassword.module.scss';
import { CopyButton } from '../../Components/CopyButton';

const GeneratePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  // eslint-disable-next-line no-console
  console.log(setLowerCase);

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLetterLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomLetterUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbols = () => {
    const symbolStr = '!@#$%^&{}+,.*_-';

    return symbolStr[random(0, symbolStr.length - 1)];
  };

  const generatorPassword = () => {
    let pass = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < passwordLength; i++) {
      const choice = random(0, 3);

      if (lowerCase && choice === 0) {
        pass += randomLetterLower();
      } else if (upperCase && choice === 1) {
        pass += randomLetterUpper();
      } else if (symbols && choice === 2) {
        pass += randomSymbols();
      } else if (numbers && choice === 3) {
        pass += random(0, 9);
      } else {
        // eslint-disable-next-line no-plusplus
        i--;
      }
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatorPassword();
  }, []);

  return (
    <div>
      <div className={classes.main_container}>
        <div className={classes.container}>
          <div className={classes.section}>
            <div className={classes.option}>
              <p>Password Length</p>
              <input
                type="number"
                name="length"
                className={classes.number}
                min={8}
                max={32}
                defaultValue={passwordLength}
                onChange={
                  (event) => setPasswordLength(Number(event.target.value))
                }
              />
            </div>
            <div className={classes.option}>
              <p>Upper Case</p>
              <input
                type="checkbox"
                name="uppercase"
                className={classes.checkbox}
                defaultChecked={upperCase}
                onChange={
                  (event) => setUpperCase(event.target.checked)
                }
              />
            </div>
            <div className={classes.option}>
              <p>Numbers</p>
              <input
                type="checkbox"
                name="numbers"
                className={classes.checkbox}
                defaultChecked={numbers}
                onChange={
                  (event) => setNumbers(event.target.checked)
                }
              />
            </div>
            <div className={classes.option}>
              <p>Symbols</p>
              <input
                type="checkbox"
                name="symbols"
                className={classes.checkbox}
                defaultChecked={symbols}
                onChange={
                  (event) => setSymbols(event.target.checked)
                }
              />
            </div>
            <div className={classes.buttons}>
              <button
                type="submit"
                className={classes.submit}
                onClick={generatorPassword}
              >
                Generate New Password
              </button>
              <CopyButton
                label="Copy"
                value={password}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className={classes.password}
          onClick={() => navigator.clipboard.writeText(password)}
        >
          <p>{password}</p>
        </button>
      </div>
    </div>
  );
};

export default GeneratePassword;
