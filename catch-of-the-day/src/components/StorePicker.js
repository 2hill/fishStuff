import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
 constructor () {
   super();
   this.goToStore = this.goToStore.bind(this);
 }
 
  goToStore(e) {
    e.preventDefault();
       // grab text from the input via ref
    const storeId = this.storeInput.value;
       // transition url from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
          getFunName()} ref={ (input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
