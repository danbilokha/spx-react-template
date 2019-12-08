import * as React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const logo: any = require('../../assets/header/ITM_logo.gif');

export default class Header extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
      return (
        <div>
            <div className={styles.TopBar}>
                <div className="Logo">
                  <Link to="/">
                      <img alt="ITM ITS" src={logo} id="ITM_logo"/>
                  </Link>
                </div>
                <Link to='/auth'>
                  <button className='header_button_enter'>Вхід</button>
                </Link>
            </div>
            <div className={styles.header}>
              <div className={styles["header-link"]}>
                <Link to='#'>Study</Link>
              </div>
              <div className={styles["header-link"]}>
                <Link to='#'>Scientific research</Link>
              </div>
              <div className={styles["header-link"]}>
                <Link to='#'>About faculty</Link>
              </div>
            </div>
        </div>
      );
    }
  }