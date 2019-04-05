import React from 'react';
// creating search box like html
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' //seaech is an input type
                placeholder='search robots' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;