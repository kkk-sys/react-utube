import React from 'react';
import Navbar from './navbar';
import Movielist from './movielist';

const Search = () => {
    return (
        <div className='search'>
            <Navbar  />
            <Movielist keyword={'ohyeah'}/>
        </div>
    );
};

export default Search;