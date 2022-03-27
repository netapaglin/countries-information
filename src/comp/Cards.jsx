import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Details from './Details';

export default function Cards({country,addToWishList,wishListArr}) {
 
  const [disable, setDisable] = useState(false)

  useEffect(() => {
    (()=>{
     if (wishListArr.includes(country)){
       setDisable(true)
     }else{
       setDisable(false)
     }
      })()
  }, [ ])

    const navigate = useNavigate();
 
    const goToCountryPage = () => {
        navigate('/country/'+ country.name.common);
    } 

    const handleAddClick = ()=>{
      addToWishList(country)
      setDisable(true)
    }

    return (
      <div className='cards'>
      <div>
        <Details country={country}/>
        <Card sx={{ maxWidth: 345 }}>
        <CardActions>
          <Button size="small" disabled={disable}  onClick={()=>{handleAddClick()}} >I wish to visit</Button>
          <Button size="small" onClick={() =>goToCountryPage()}>Learn More</Button>
        </CardActions>
      </Card>
      </div>
      </div>
    )
}
