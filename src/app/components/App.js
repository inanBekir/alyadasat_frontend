import React,{ Component } from 'react';
import '../../scss/App.scss';
import {BrowserRouter, Route} from 'react-router-dom'

import {Root} from './Root';
import {Index} from './Products/Index';
import {Signup} from './auth/Signup';
import {Signin} from './auth/Signin';
import {Show} from './Products/Show';

class App extends Component {
  render() {
  return (
   <BrowserRouter>
            <Root>
                <Route exact path={"/"} component={Index}/>
                <Route path={"/show"} component={Show}/>
                <Route path={"/signup"} component={Signup}/>
                <Route path={"/signin"} component={Signin}/>
            </Root>
   </BrowserRouter>
  );
  }
}

export default App;