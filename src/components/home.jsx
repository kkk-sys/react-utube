import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Movielist from './movielist';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Home = memo((props) => {

    const [keyword,setKeyword] = useState('');

    useEffect(async () => {

        await setKeyword(props.sentKeyword);
        console.log(`set sentkeyword at home ${props.sentKeyword}`);

    },props.sentKeyword);

    // wrong. 이거 setkeyword 왜 반영안됨? object 아니라서?
    // const getKeyword = async (search_Keyword) => {
    const getKeyword = async (search_Keyword) => {
        
        //왜 let으로 하고 직접 수정해야하는거야? 왜 set 작동x
        //wrong. 왜 맨위에거는 실행이 안되는거?
        console.log(search_Keyword); //이거왜안나옴
        // keyword = search_Keyword;
        await setKeyword(search_Keyword);
        console.log(`keyword is ${keyword}`);
    }

    const getSelected = (selected,items) => {
        props.getselected(selected,items);
    }


    return (
        <div className='main'>
          <Navbar getkeyword={getKeyword}/>
          <Movielist keyword={keyword} getselected = {getSelected} />
        </div>
    );
});

export default Home;