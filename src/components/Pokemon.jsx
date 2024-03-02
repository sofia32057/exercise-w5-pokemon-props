import { Type } from "./Type.jsx";
import { Weakness } from "./Weakness.jsx";

// Destructure pokemon props here :)
export const Pokemon = ({
  name,
  height,
  weight,
  types,
  weaknesses,
  category,
}) => {
  return (
    <div className="pokemon">
      <h2>{name}</h2>
      <ul>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
        <li>
          Types:
          <ul>
            {types.map(
              (type, i) => {
              return (
                <Type
                  key={i}
                  typeName={type}
                />
              );
            }
            )}
          </ul>
        </li>
        <li>
          Weaknesses:
          <ul>
            {weaknesses.map(
              (weakness, i) => {
              return (
                <Weakness
                  key={i}
                  weaknessName={weakness}
                />
              );
            }
            )}
          </ul>
        </li>
        <li>Category: {category}</li>
      </ul>
    </div>
  );
};

Pokemon.defaultProps = {
  key: 1,
  name: "Pikachu",
  height:0.4,
  weight: 6.0,
  types: "",
  weaknesses: "None",
  category: "Mouse"
};

Pokemon.propTypes = {
  name: "",
  height: 0,
  weight: 0,
  types: [],
  weaknesses: [],
  category: ""
}
;