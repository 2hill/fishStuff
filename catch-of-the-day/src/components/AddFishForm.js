import React from 'react';

class AddFishForm extends React.Component {
       createFish(event) {
         event.preventDefault;
              
         const fish = {
           name: this.name.value,
           price: this.price.value,
           status: this.status.value,
           desc: this.desc.value,
           image: this.image.value,
         }
       }

  render() {

    return (
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={this.name = input}  type="text" placeholder="Fish Name"/>
        <input ref={this.price = input} type="text" placeholder="Fish Price"/>
        <select ref={this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref={this.desc = input} type="text" placeholder="Fish Desc"></textarea>
        <input ref={this.image = input} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}
export default AddFishForm;
