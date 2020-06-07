import React from 'react';
import './App.css';
import SalaryItems from "./components/salary-items";


class App extends React.Component {
  state = {
    salaryItems: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <main className="container">
          <h1>Hello</h1>
        </main>
      </div>
    );
  }

}

export default App;
