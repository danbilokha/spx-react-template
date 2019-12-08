import * as React from 'react';
import styles from './HelloWorld.module.scss';
import {IHelloWorldProps} from './IHelloWorldProps';
import Header from './header/Header';
import Home from '../containers/home/Home';
import NotFound from '../containers/notFound/NotFound';
import history from '../services/history';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <Header/>
        <BrowserRouter history={history}>
          <Switch>
            {/* TODO: FIX ME. Path should be '/' */}
            <Route exact path="/temp/workbench.html" component={Home}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
