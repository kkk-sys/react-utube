

import React, { memo, useEffect, useState } from 'react';
import Movieinfo from './movieinfo';
import axios from 'axios';

const Movielist = memo((props) => {

    const [utube_infos , setInfos] = useState([]);
    const [response , setResponse] = useState('');
    const [toWhere , setTowhere] = useState(undefined);

    useEffect(async () => {
        console.log(`keyword is ${props.keyword}`);
        if(props.keyword =='')
            {
            console.log('most popular');
        const popularLoad = async () => {
            try {
                const response = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=AIzaSyDG6dWqLrPZxoFKOYrngk-PN6CenPDNzKc");
            console.log(response);
            console.log(response.data.items);
            await setInfos(response.data.items);
            } catch (err) {
                console.log('errrrrrrrrrrrr');
                console.log(err);
            }
            // wrong 왜 계속 호출??
        }
        await popularLoad();
        // console.log(utube_infos);
        }
        else {
            console.log(`search keywork ${props.keyword}`);
            const searchLoad = async () => {
                try {
                    const response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q="+props.keyword+"&key=AIzaSyDG6dWqLrPZxoFKOYrngk-PN6CenPDNzKc");
                console.log(response);
                console.log(response.data.items);
                await setInfos(response.data.items);
                } catch (err) {
                    console.log(`${props.keyword} keyword search error`);
                    console.log(err);
                }
                // wrong 왜 계속 호출??
            }
            console.log('seearch ing~~???');
            await searchLoad();

        }



    },[props.keyword]);

    const getSelected = (selected) => {
        // console.log(item);
        // console.log(k);
        props.getselected(selected,utube_infos);
    }

    return (
        <div className='infoList'>
            {console.log('list render')}
            {
                utube_infos.map( item =>(
                    <Movieinfo item={item} getselected = {getSelected} />
                ))
            }
        </div>
    );
});

export default Movielist;