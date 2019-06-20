import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBreeds: [],
      imgSrc: [],
      breedName: "",
      isChanged: false
    };
  }
  fetchData = (breedName) => {
    fetch("https://dog.ceo/api/breed/" + breedName + "/images/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          imgSrc: data.message,
          breedName: breedName
        });
      });
  };
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          listOfBreeds: Object.keys(data.message)
        });
        let listOfBreeds = this.state.listOfBreeds;
        let randomBreed = listOfBreeds[Math.floor(Math.random() * listOfBreeds.length + 1)];
        this.fetchData(randomBreed);
      });
  }

  changeHandler = (event) => {
    this.fetchData(event.target.value);
  };
  onClickHandler = (event) => {
    this.fetchData(this.state.breedName);
  };
  render() {
    return (
      <div className="Breeds">
        <h2 className="Breeds-title">Select a Breed</h2>
        <p>
          <select className="Breeds-select" onChange={this.changeHandler}>
            {this.state.listOfBreeds.map((dog, index) => (
              <option key={index}>{dog}</option>
            ))}
          </select>
        </p>

        <img
          className="Breeds-image"
          onChange={this.changeHandler}
          alt=""
          src={this.state.imgSrc}
        />

        <p>
          <button className="Breeds-button" onClick={this.onClickHandler}>
            Show me more!
          </button>
        </p>
      </div>
    );
  }
}

export default Breeds;
