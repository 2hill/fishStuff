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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
           <Header tagline="Fresh Seafood Market"/>
           <ul className="list-of-fishes">
             {Object
               .keys(this.state.fishes)
               .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
              }
           </ul>
       </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}
export default App;
