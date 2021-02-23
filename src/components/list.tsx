import React from "react";
import API from "../api/index";

class List extends React.Component {
  state = {
    characters: []
  };
  componentDidMount() {
    API.getCharacters().then((res) => {
      this.setState({
        characters: res.data.results
      });
    });
  }
  render() {
    return (
      <div className="List">
        <ul>
          {this.state.characters.map((char) => {
            return <li key={char.id}>{char.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
