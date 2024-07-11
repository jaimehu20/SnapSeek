export const Header = () => {
    
    return <>
        <header>
            <div>
                <h1>La fotografía es el arte de capturar el arte en un instante.</h1>
                <form action="" className="search-bar">
	                <input type="search" name="search" pattern=".*\S.*" required />
	                <button className="search-btn" type="submit">
		                <span>Search</span>
	                </button>
                </form>
            </div>
        </header>
    </>
}