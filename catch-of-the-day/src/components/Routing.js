import React from 'react';
import App from './App';
import NotFound from './NotFound';
import StorePicker from './StorePicker';
import {BrowserRouter, Miss, Match} from 'react-router';

 class Route extends React.Component {
    render () {
      return (
       <BrowserRouter>
         <div>
           <Match exactly pattern="/" component={StorePicker} />
           <Match pattern="/store/:storeId" component={App}/>
           <Miss component={NotFound}/>
         </div>
       </BrowserRouter>
    )
  }
}
export default Route;
