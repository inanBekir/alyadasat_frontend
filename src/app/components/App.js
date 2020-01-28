import React,{ Component } from 'react';
import '../../scss/App.scss';
import {BrowserRouter, Route} from 'react-router-dom'

import {Root} from './Root';
import {Home} from './Home';
import {Signup} from './auth/Signup';
import {Signin} from './auth/Signin';

class App extends Component {
  render() {
  return (
   <BrowserRouter>
            <Root>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/signup"} component={Signup}/>
                <Route path={"/signin"} component={Signin}/>
            </Root>
   </BrowserRouter>
  );
  }
}

export default App;