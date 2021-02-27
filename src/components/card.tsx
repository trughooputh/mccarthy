import React from "react";

class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={item.image} alt={item.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={item.image} alt={item.name} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{item.name}</p>
              <p className="subtitle is-6">{item.origin.species}</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
