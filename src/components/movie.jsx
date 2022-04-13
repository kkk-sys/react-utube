import React, { memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Movie = memo((props) => {

    const [item,setItem] = useState(undefined);
    let [id,setId] = useState('');

    useEffect(async() => {

        console.log('movie');
        console.log(props.selected);
        await setItem(props.selected);  //이건또왜 작동 x wrong.
        console.log(item);
        console.log(typeof(props.selected.id));
        if(typeof(props.selected.id) == "string"){
            setId(props.selected.id);
            id = props.selected.id;
        } else{
            setId(props.selected.id.videoId);
            id = props.selected.id.videoId;
        }
        console.log(`id is ${id}`);

    },props.selected)

    return (
        <div className='movie'>
            
            <ReactPlayer className="player" width="100%" height="45vh"
            url={"https://www.youtube.com/watch?v=" + props.selected.id.videoId} playing controls/>
            <h2>{props.selected.snippet.title}</h2>
            <h3>{props.selected.snippet.channelTitle}</h3>
            <p>{props.selected.snippet.description}</p>
        </div>
    );
});

export default Movie;
