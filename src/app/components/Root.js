import React,{ Component } from 'react';

import {Header} from './Header';

export class Root extends Component {
  render() {
  return (
   <div className="main">
       <Header/>
       <hr/>
       <div className='container'>
        <div className='row'>
            <div className="col-xs-10 col-xs-ofset-1">
                {this.props.children}
            </div>
        </div>
       </div>
   </div>
  );
  }
}