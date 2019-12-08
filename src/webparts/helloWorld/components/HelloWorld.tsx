import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Header from './header/Header';
import Home from '../containers/home/Home';
import {Switch, Route} from 'react-router-dom';
import NotFound from '../containers/notFound/NotFound';
import { ConnectedRouter } from 'connected-react-router';
import history from '../services/history';
import {configureStore, Provider} from 'react-redux';

const store = configureStore({}, history);

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <Header />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="" component={NotFound} />
            </Switch>        
          </ConnectedRouter>
        </Provider>
        {/* <Home /> */}
        {/* <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to ITM SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
