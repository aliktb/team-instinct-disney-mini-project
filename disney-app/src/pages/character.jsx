import NavigationBar from "../components/NavigationBar";

const Character = (props) => {
  const { character } = props;
  console.log(character);

  return (
    <>
      <NavigationBar />
      <h1>character page</h1>
      <td></td>
    </>
  );
};

export default Character;
