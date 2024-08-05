import React from "react";
import { categorias } from "../Categorias";

const CategoryList = ({ onSelectCategory }) => {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {categorias.map((category) => (
            <li key={category.id} onClick={() => onSelectCategory(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };


  export default CategoryList;
  