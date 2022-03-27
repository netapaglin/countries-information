
import './App.css';
import Header from './comp/Header';
import Main from './comp/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './comp/About';
import Wish from './comp/Wish';
import CountryPage from './comp/CountryPage';
import { useEffect, useState } from 'react';

function App() {

  const [wishListArr, setWishLIstArr] = useState([])
  const [countryArr, setCountryArr] = useState([])

  useEffect(() => {
    (async()=>{
        const cntr = await fetch(`https://restcountries.com/v3.1/all`)
          const data  =await cntr.json()
          setCountryArr(data)
      })()
  }, [])

  const addToWishList = (country) => {
    setWishLIstArr([...wishListArr, country])
    
}

const deleteWish = (capital)=>{
    const newWish = wishListArr.filter((item)=>item.capital !== capital)
    setWishLIstArr(newWish)
}

  return (
   <Router>
    <div className="App">
       <Header/>
       <Routes>
         <Route path="/" element={<Main addToWishList={addToWishList} wishListArr={wishListArr} countryArr={countryArr}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/wish" element={<Wish wishListArr={wishListArr} deleteWish={deleteWish} />}/>
         <Route path="/country/:countryName" element={<CountryPage/>}/>
       </Routes>
     </div>
    </Router>
  );
}

export default App;
