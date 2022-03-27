import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CountryPage() {

     const {countryName}= useParams();
     const [country, setCountry]= useState({})
     const [flag, setFlag]= useState()
     const [languages, setLanguages]= useState()
     const [currencies, setCurrencies]= useState()

   
    useEffect(() => {
        (async()=>{
            const res= await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data= await res.json()
            let currency = Object.values(data[0].currencies)[0]
            console.log(data[0])
            setCountry(data[0])
            setFlag(data[0].flags.png)
            setLanguages(data[0].languages.spa)
            setCurrencies(currency.name)
      
        })()
    }, [countryName])
    
    return (
        <div className='countryPage'>   
          <Link to="/">back</Link>
            <h1 >{countryName}</h1>
            <div  className='symbols' >
                <img src={flag} alt='flag' width='300'/>
            </div>
            <div className='info'>
                <p>Capital</p>
                <h3>{country.capital}</h3>
                <p>Languages:</p>
                <h3 >{languages}</h3>
                <p>Population</p>
                <h3>{country.population}</h3>
                <p>currencies</p>
                <h3>{currencies}</h3>
            </div>
            <div className='geography'>
                <p>Continent</p>
                <h3>{country.continents}</h3>
                <p>Time zone</p>
                <h3>{country.timezones}</h3>
                <p>Area</p>
                <h3>{country.area} Km</h3>
            </div>
            {/* <div className='maps'>
                <h3>map: {country.maps.googleMaps}</h3>
            </div> */}
            {/* <h3>{country.region}</h3>
            <h3>{country.capital}</h3> */}
            {/* <h3>{country.flags.png}</h3> */}
        </div>
    )
}
