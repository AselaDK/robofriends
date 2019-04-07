import React from 'react';
// creating search box like html
const SearchBox = ({ searchChange }) => {       //gave searchChange state(function)
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' //seaech is an input type
                placeholder='search robots' 
                onChange = {searchChange}   //set on change function state
            />
        </div>
    );
}

export default SearchBox;