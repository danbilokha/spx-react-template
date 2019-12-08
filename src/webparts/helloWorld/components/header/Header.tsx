import * as React from 'react';
import styles from './Header.module.scss';

const logo: any = require('../../assets/header/ITM_logo.gif');

export default class Header extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
      return (
        <div>
            <div className={styles.TopBar}>
                <div className="Logo">
                  <a href="/kafedra_ITM">
                      <img alt="ITM ITS" src={logo} id="ITM_logo"/>
                  </a>
                </div>
                <button className='header_button_enter'>Вхід</button>
            </div>
            <div className={styles.header}>
              <div className={styles["header-link"]}>
                <a href='#'>Study</a>
              </div>
              <div className={styles["header-link"]}>
                <a href='#'>Scientific research</a>
              </div>
              <div className={styles["header-link"]}>
                <a href='#'>About faculty</a>
              </div>
            </div>
        </div>
      );
    }
  }