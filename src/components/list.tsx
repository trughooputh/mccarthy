import React from "react";
import API from "../api/index";

import Card from "./card";

class List extends React.Component {
  state = {
    characters: []
  };
  componentDidMount() {
    API.getCharacters().then((res) => {
      console.log(res.data);
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
            return <Card item={char} key={char.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
