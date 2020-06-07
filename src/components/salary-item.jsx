import React from "react";

class SalaryItem extends React.Component {
  render() {
    return (
      <div>
        <label className="salary-item-label">{this.props.name}</label>
        <input
          type="text"
          className="price-input"
          name="price"
          value={this.props.price}
          onChange={event => this.props.onChange(event, this.props.id)}
        />
        <input
          type="text"
          className="count-input"
          name="count"
          value={this.props.count}
          onChange={event => this.props.onChange(event, this.props.id)}
        />
      </div>
    );
  }
}


export default SalaryItem;
