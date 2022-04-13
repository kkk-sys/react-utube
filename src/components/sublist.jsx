import React, { memo, useEffect, useState } from 'react';
import Subinfo from './subinfo';

const Sublist = memo((props) => {

    let [items,setItems] = useState([]);

    useEffect(async () => {

        await setItems(props.items);
        items = props.items;   //wrong. 도대체 왜???
        console.log(`props sublist sent ${props.items}`);

    },props.items);

    const getSelected = (item) => {
        props.getselected(item);
    }


    return (
        <div className='sublist'>
            {/* <Subinfo snippet={undefined} /> */}
            {       
                items && items.map( item => (
                    <Subinfo item={item} getselected = {getSelected} />
                ))
            }
        </div>
    );
});

export default Sublist;