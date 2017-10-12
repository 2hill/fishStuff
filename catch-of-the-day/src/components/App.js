import React from 'react';
import Header from './Header';
import Order from './Order';
import NotFound from './NotFound';
import Inventory from './Inventory';
import StorePicker from './StorePicker';
import {BrowserRouter, Miss, Match} from 'react-router';


//App injectée dans le dom

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
           <Header tagline="Fresh Seafood Market"/>
       </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}
export default App;

// partie router

export class Route extends React.Component {
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
