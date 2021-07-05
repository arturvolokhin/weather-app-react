import Button from './Button'

const Search = (props) => {
    return(
        <>
            <div className="search">
                <input type="text" className="search__field" minLength="2" maxLength="30" placeholder="Город"/>
                <Button classes={'button-search'} text={'Search'}/>
            </div>
        </>
    )
}

export default Search;