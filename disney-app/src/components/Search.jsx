import React, { useEffect, useState } from "react";
import axios from 'axios';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    const search = () => {
        axios.get(`https://api.disneyapi.dev/characters`).then((response) => {
            console.log(response.data.data)
            const characters = response.data.data
            const filteredCharacters = characters.filter((character) => { return character.name.includes(searchTerm) })
            console.log(filteredCharacters);
            setSearchResults(filteredCharacters);

        })
    }

    useEffect((searchResults) => { console.log(searchResults); }, [])



    return (
        <div>
            <input type='text' onChange={(e) => { setSearchTerm(e.target.value) }}></input>
            <button type='button' onClick={search}>Search</button>
        </div >
    );
}

export default Search;