import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';



//App injectée dans le dom

class App extends React.Component {

  constructor () {
    super ();
    this.addFish = this.addFish.bind(this);
    // initial state
    this.state = {
      order:  {},
      fishes: {}
    };

  }
 addFish (fish) {
// copy our initial state object
  const fishes = {...this.state.fishes};
// update/add new fishes
const timestamp = Date.now();
fishes[`fish-${timestamp}`] = fish;
//set state
this.setState({fishes})
 }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
           <Header tagline="Fresh Seafood Market"/>
       </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}
export default App;

/* transfered to its own routing.js file
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
  }*/
