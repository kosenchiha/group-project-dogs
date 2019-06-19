import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        let listOfbreeds = Object.keys(data.message);
        this.setState({
          options: listOfbreeds
        });
      });
  }
  render() {
    return (
      <div className="Breeds">
        <h2 className="Breeds-title">Select a Breed</h2>
        <p>
          <select className="Breeds-select" onChange={this.handleChange}>
            {this.state.options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </p>
        <img className="Breeds-image" alt="" src="http://via.placeholder.com/300x300" />
        <p>
          <button className="Breeds-button">Show me more!</button>
        </p>
      </div>
    );
  }
}

export default Breeds;
