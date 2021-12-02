import { useState } from "react";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    search(() => {
        axios.get(`https://api.disneyapi.dev/characters`).then()
    })

    return (
        <div>
            <input type='text' onChange={(e) => { setSearchTerm(e.target.value) }}></input>
            <button type='button' onClick={search}>Search</button>
        </div >
    );
}

export default Search;