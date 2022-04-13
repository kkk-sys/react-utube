import React, { memo, useEffect } from 'react';
import Movie from './movie';
import Navbar from './navbar';
import Sublist from './sublist';
import Subinfo from './subinfo';
import { useState } from 'react';

const Veiw = memo((props) => {

    const [selected , setSelected] = useState(
        {
        id:"dummy" ,
        snippet : {
            title : "dummy",
            channelTitle : "dummy",
            description : "dummy"
        }
    });

    useEffect(async () => {

        console.log(props.selected);
        await setSelected(props.selected);
        console.log(`selected ${selected}`);
        console.log(props.items);
        console.log('vieww');

    },[props.selected])

    const getKeyword = async (search_Keyword) => {
        props.getkeyword(search_Keyword);
    }

    const getSelected = async (item) => {
        await setSelected(item);
        console.log(`state selected `);
        console.log(selected);
    }

    return (
        <div className='view'>
            <Navbar getkeyword = {getKeyword}/>
            <div className='view__content'>
            <Movie selected = {selected}/>
            <Sublist items = {props.items} getselected={getSelected}/>
            </div>
        </div>
    );
});

export default Veiw;