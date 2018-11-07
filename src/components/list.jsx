import React, { Component } from "react";
import Card from "./card";

class List extends Component {
  render() {
    const filtered_cards = this.props.cards.filter(card => card.list === this.props.name);
    return (
      <>
        <h4>{this.props.name}</h4>
        {filtered_cards.map(card => (
          <Card
            key={card.id}
            content={card.content}
          />
        ))}
      </>
    );
  }
}

export default List;
