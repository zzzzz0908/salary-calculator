import React from "react";
import SalaryItem from "./salary-item";

class SalaryItems extends React.Component {
  render() {
    const {
      salaryItems,
      onChange,
      onDelete
    } = this.props;

    return (
      <div>
        <h1>Salary List</h1>
        {salaryItems.map(salaryItem => (
          <SalaryItem
            key={salaryItem.id}
            id={salaryItem.id}
            rate={salaryItem.rate}
            count={salaryItem.count}
            name={salaryItem.name}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default SalaryItems;
