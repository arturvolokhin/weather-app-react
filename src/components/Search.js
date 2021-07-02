const Search = (props) => {
    return(
        <>
            <header className="header">
                <input type="text" className="header__search" minLength="2" maxLength="30" placeholder="Город"/>
                <button className="button button-search">Поиск</button>
            </header>
        </>
    )
}

export default Search;