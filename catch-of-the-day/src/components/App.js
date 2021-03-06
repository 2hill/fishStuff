import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

//App injectée dans le dom

class App extends React.Component {

  constructor () {
    super ();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
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

 loadSamples () {
   this.setState({
     fishes : sampleFishes
   });
 }

 addToOrder (key) {
   // copy our initial state object
   const order  = {...this.state.order};
   // update/add new number of fishes ordered
   order[key] = order[key] + 1 || 1;
   //update state
   this.setState({order})
 }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
           <Header tagline="Fresh Seafood Market"/>
           <ul className="list-of-fishes">
             { /* object.keys nous permet de boucler les fish via le map */ }
             {Object
               .keys(this.state.fishes)
               .map(key => <Fish key={key}
                                 index={key}
                                 details={this.state.fishes[key]}
                                 addToOrder={this.addToOrder}/>)}
           </ul>
       </div>
       <Order/>
       <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}
export default App;
