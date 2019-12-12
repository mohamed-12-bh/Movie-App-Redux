import React from "react";
import CardMovie from "./Card.";
import AddMovie from "../Modal/ModalAdd";

const ListMovies = props => {
  return (
    <div>
      <div className="cards">
        {props.table.map((el, key) => (
          <CardMovie el={el} />
        ))}
      </div>
      <div className="add-movie"></div>
      <AddMovie/>
    </div>
  );
};

export default ListMovies;
