import { useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import { imageSearch } from "../../features/images/searchThunk";

export const Header = () => {

    const dispatch = useAppDispatch();
    const [ searchPattern, setSearchPattern ] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPattern(event.target.value);
    }

    const handleSearch = (event: any) => {
        event.preventDefault();
        dispatch(imageSearch(searchPattern))
    }
    
    return <>
        <header>
            <div>
                <h1>La fotografía es la poesía de la realidad capturada en un instante.</h1>
                <form action="" className="search-bar" onSubmit={handleSearch}>
	                <input type="search" name="search" pattern=".*\S.*" required onChange={handleChange}/>
	                <button className="search-btn" type="submit">
		                <span>Buscar...</span>
	                </button>
                </form>
            </div>
        </header>
    </>
}