import React, { Component } from 'react';

class TechStacks extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  createTechStackCheckboxes() {
    const isAllChecked = false;
    return this.props.techStackItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.props.selectedTechStacksItems.includes(item)}
          value={item}
          onChange={this.props.handleTechStackChange} />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  }

  render() {
    return (
    <div>
      {this.createTechStackCheckboxes()}
    </div>
    )
  }
}

export default TechStacks;