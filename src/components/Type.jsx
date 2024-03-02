// Destructure pokemon types props here :)
export const Type = ({typeName}) => {
  return <li className="type">
    {typeName}
  </li>;
};

Type.propTypes = {
  typeName: "",
};