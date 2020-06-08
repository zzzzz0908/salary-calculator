import React from "react";

class SalaryItem extends React.Component {
  render() {
    return (
      <div>
        <label className="salary-item-label">{this.props.name}</label>
        <input
          type="number"
          placeholder="Rate"
          className="rate-input"
          name="rate"
          value={this.props.rate}
          onChange={event => this.props.onChange(event, this.props.id)}
        />
        <input
          type="number"
          placeholder="Count"
          min="0"
          className="count-input"
          name="count"
          value={this.props.count}
          onChange={event => this.props.onChange(event, this.props.id)}
        />
        <button
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}


export default SalaryItem;
