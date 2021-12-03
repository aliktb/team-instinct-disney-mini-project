import { useState } from "react";
import Search from "../components/Search";

const SearchPage = () => {

    const [results, setResults] = useState([]);

    if (results.length > 0) {

        return (
            <div>

            </div>
        )
    } else {

        return (
            <div>
                <Search setResults={setResults} />
            </div>
        );
    }
}

export default SearchPage;