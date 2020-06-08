import React from 'react';
import './App.css';
import SalaryItems from "./components/salary-items";
import SalaryItemForm from "./components/salary-item-form";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryItems: [
        { id: 0, name: "Выходы", rate: 400, count: 10 },
        { id: 1, name: "Картриджи 1", rate: 20, count: 150 },
        { id: 2, name: "Картриджи 2", rate: 30, count: 45 },
        { id: 3, name: "Картриджи 3", rate: 50, count: 22 },
      ],
      counter: 4
    };
  }


  handleChange = (event, id) => {
    const salaryItems = [...this.state.salaryItems];
    const index = salaryItems.findIndex(item => item.id === id);

    salaryItems[index][event.target.name] = event.target.value; //Number(event.target.value);
    this.setState({ salaryItems });
  };

  handleAdd = (newItem) => {
    const nextId = this.state.counter + 1;
    const newSalaryItems = [
      ...this.state.salaryItems,
      { id: nextId, name: newItem.name, rate: newItem.rate, count: newItem.count },
    ];
    this.setState({
      salaryItems: newSalaryItems,
      counter: nextId
    });
  };

  handleDelete = (id) => {
    const salaryItems = this.state.salaryItems.filter(c => c.id !== id);
    this.setState({ salaryItems });
  };


  render() {
    return (
      <main className="container">
        <h1>Hello</h1>
        <SalaryItems
          salaryItems={this.state.salaryItems}
          onChange={this.handleChange}
          onDelete={this.handleDelete}
        />

        <SalaryItemForm
          onSubmit={this.handleAdd}
        />

        {this.state.salaryItems.map(salaryItem => (
          <p key={salaryItem.id}>{salaryItem.count * salaryItem.rate}</p>
        ))}

        <h3>Total Sum</h3>
        <p>{this.state.salaryItems.reduce((sum, item) => sum + item.count * item.rate, 0)}</p>
      </main>
    );
  }

}

export default App;
