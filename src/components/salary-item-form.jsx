import React from "react";

class SalaryItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rate: "",
      count: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state);
    event.preventDefault();
    this.setState({
      name: "",
      rate: "",
      count: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="rate"
          placeholder="Rate"
          value={this.state.rate}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="count"
          placeholder="Count"
          value={this.state.count}
          onChange={this.handleInputChange}
        ></input>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}


export default SalaryItemForm;
