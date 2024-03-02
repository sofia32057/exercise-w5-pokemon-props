export const Weakness = ({weaknessName}) => {
  return <li className="weakness">
    {weaknessName}
  </li>;
};

Weakness.propTypes = {
  weaknessName: "",
};
