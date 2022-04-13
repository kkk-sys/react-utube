import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';
import { memo } from 'react';

const Navbar = memo((props) => {

    const inputRef = React.createRef();

    const gotoHome = async () => {
        console.log('home');
        window.location.replace('/');
        await props.getkeyword(undefined);
    }

    const search = async () => {
        console.log('keyword clicked');
        // wrong.. 새로운 페이지로는 왜 바꾸지 못하지?
        // window.location.replace('/');
        const name = inputRef.current.value;
        await props.getkeyword(name);
    }


    return (
        <nav >
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
        </style> 

        <img src="../img/youtube-brands.svg" alt="" />
        <img src="../youtube.png" alt="" />
        
        
        {/* <button className='homeBtn' onClick={gotoHome}> */}
        <Link to="/" className='homeBtn' onClick={gotoHome}>
            <i class="fa-brands fa-youtube"></i>
            <span className='utubeLogo'>Youtube</span>
        </Link >
        {/* </button> */}

            <form className='textForm' action="">
                <input className='searchInput' ref={inputRef}  placeholder="  Search.." />
                
                <Link to="/" className='searchBtn1'  >
                <button className='searchBtn'  onClick={search} >
                    <i className="fa-solid fa-magnifying-glass"></i>                
                </button>
                </Link>
            </form>
        </nav>
    );
});

export default Navbar;