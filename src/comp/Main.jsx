import React from 'react'
import Cards from './Cards'

export default function Main({countryArr,addToWishList,wishListArr}) {

    console.log(countryArr)

    return (
        <div className='main'>
      {  countryArr.map((country)=><Cards 
      key={country.flags.png} 
      country={country} 
      addToWishList={addToWishList}
      wishListArr={wishListArr}
      />)}
        </div>
    )
}
