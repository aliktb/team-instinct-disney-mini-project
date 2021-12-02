const Character = (props) => {
    const { character } = props;
    console.log(character);

    return ( 
        <>
        <td>{character.id}</td>
        <td>{character.sourceUrl}</td>
        <td>{character.name}</td>
        <td><img src={character.imageUrl}></img></td>
        </>
     );
};
 
export default Character;