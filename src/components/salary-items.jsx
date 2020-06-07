import React from "react";
import SalaryItem from "./salary-item";

class SalaryItems extends React.Component {
  render() {
    const {
      salaryItems,
      onChange
    } = this.props;

    return (
      <div>
        <h1>Salary List</h1>
        {salaryItems.map(salaryItem => (
          <SalaryItem
            key={salaryItem.id}
            id={salaryItem.id}
            price={salaryItem.price}
            count={salaryItem.count}
            name={salaryItem.name}
            onChange={onChange}
          />
        ))}
      </div>
    );
  }
}

export default SalaryItems;
