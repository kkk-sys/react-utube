
import { Component , useState } from 'react';
import './app.css';
import { BrowserRouter,Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import Veiw from './components/veiw';

function App(){

    let [selected,setSelected] = useState(undefined);
    const [keyword,setKeyword] = useState('');
    let [items,setItems] = useState(undefined);

    const getitems = () => {
      console.log(`at app real items ${items}`);
    }

    const getSelected = async (selected_item,allitems) => {
      await setSelected(selected_item);
      selected = selected_item;  //wrong. 이딴짓까지해야함?
      console.log(selected);
      await setItems(allitems);
      items = allitems;
      console.log(`at app items ${allitems}`);
      getitems();
    }

    const getKeyword = async(keyword) => {
      console.log(keyword);
      setKeyword(keyword);
      console.log(`app keyword is ${keyword}`);

    }

  return (
    <>
    <div className='main'>
      {/* wrong. 왜 browser붙이니까 됨? */}
       <BrowserRouter>
       <Routes>
        <Route path="/" exact={true} element={<Home getselected={getSelected} sentKeyword={keyword}/>}/>

        <Route path="/view" element={<Veiw selected={selected} getkeyword={getKeyword} items = {items}/>}/>
       </Routes>
      </BrowserRouter> 

    </div>
      </>
  );
}

export default App;



