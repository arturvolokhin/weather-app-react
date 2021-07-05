import React, {useState} from 'react'
import Button from './Button'

const Search = ({getCityName}) => {  

    const [value, setValue] = useState('');

    const handleClick = () => {
        getCityName(value);
        setValue('');
    }

    return(
        <>
            <div className="search">
                <input className="search__field" 
                    onChange={(e) => setValue(e.target.value)} 
                    value = {value}
                    type="text" minLength="2" maxLength="30" 
                    placeholder="Город"
                />
                <Button classes={'button-search'} text={'Search'} searchCity={() => handleClick()}/>
            </div>
        </>
    )
}

export default Search;