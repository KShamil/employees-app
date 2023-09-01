import { Component } from "react";
import "./SearchPanel.css";

export class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    const { term } = this.state;
    return (
      <>
        <input
          type="text"
          placeholder="Найти сотрудника"
          className="form-control search-input"
          value={term}
          onChange={this.onUpdateSearch}
        />
      </>
    );
  }
}
