export const Header = () => {
    
    return <>
        <header>
            <div>
                <h1>La fotografía es la poesía de la realidad capturada en un instante.</h1>
                <form action="" className="search-bar">
	                <input type="search" name="search" pattern=".*\S.*" required />
	                <button className="search-btn" type="submit">
		                <span>Buscar...</span>
	                </button>
                </form>
            </div>
        </header>
    </>
}