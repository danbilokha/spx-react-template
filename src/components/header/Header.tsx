import * as React from 'react';
import styles from './Header.module.scss';
import '../../assets/header/ITM_logo.gif';

export default class Header extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
      return (
        <div>
            <div className={styles.TopBar}>
                <div className="Logo">
                <a href="/kafedra_ITM">
                    <img alt="ITM ITS" src='../../assets/header/ITM_logo.gif' id="ITM_logo"/>
                </a>
                </div>
                <button className='header_button_enter'>Вхід</button>
            </div>
        </div>
      );
    }
  }