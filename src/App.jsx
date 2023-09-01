import { Component } from "react";

import { AppFilter } from "./components/AppFilter/AppFilter";
import { AppInfo } from "./components/AppInfo/AppInfo";
import { EmployeesAddForm } from "./components/EmployeesAddForm/EmployeesAddForm";
import { EmployeesList } from "./components/EmployeesList/EmployeesList";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";

import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "John Smit",
          salary: 800,
          increase: false,
          rise: false,
        },
        {
          id: 2,
          name: "Tomas Anderson",
          salary: 3000,
          increase: false,
          rise: false,
        },
        {
          id: 3,
          name: "John Connor",
          salary: 5000,
          increase: false,
          rise: false,
        },
      ],
      term: "",
      filter: "",
    };
    this.maxId = 4;
  }

  handleDeleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, increase: !old.increase };
      const newArray = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArray,
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            rise: !item.rise,
          };
        }
        return item;
      }),
    }));
  };

  handleAddItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  handleSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.name.toLowerCase().includes(term));

    // return items.filter((item) => {
    //   return item.name.indexOf(term) > -1;
    // });
  };

  handleFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "salary":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.handleSearch(data, term);
    const filterData = this.handleFilter(visibleData, filter);
   
    return (
      <>
        <main className="main">
          <AppInfo employees={employees} increased={increased} />
          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
          </div>
          <EmployeesList
            data={filterData}
            onDelete={this.handleDeleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
            // onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm onAdd={this.handleAddItem} />
        </main>
      </>
    );
  }
}

export default App;

// onToggleProp = (id, prop) => {
//   this.setState(({ data }) => ({
//     data: data.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           [prop]: !item[prop],
//         };
//       }
//     }),
//   }));
// };
