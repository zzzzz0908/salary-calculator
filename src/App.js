import React from 'react';
import './App.css';
import SalaryItems from "./components/salary-items";


class App extends React.Component {
  state = {
    salaryItems: [
      { id: 0, name: "Выходы", price: 400, count: 10 },
      { id: 1, name: "Картриджи 1", price: 20, count: 150 },
      { id: 2, name: "Картриджи 2", price: 30, count: 45 },
      { id: 3, name: "Картриджи 3", price: 50, count: 22 },
    ]
  };

  handleChange = (event, id) => {
    const salaryItems = [...this.state.salaryItems];
    const index = salaryItems.findIndex(item => item.id === id);
    salaryItems[index][event.target.name] = event.target.value;
    this.setState({ salaryItems });
  };

  render() {
    return (
      <main className="container">
        <h1>Hello</h1>
        <SalaryItems
          salaryItems={this.state.salaryItems}
          onChange={this.handleChange}
        />
        {this.state.salaryItems.map(salaryItem => (
          <p key={salaryItem.id}>{salaryItem.count * salaryItem.price}</p>
        ))}
      </main>
    );
  }

}

export default App;
