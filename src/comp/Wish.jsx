import React from 'react'
// import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Details from './Details';
import { Link } from 'react-router-dom';

export default function Wish({wishListArr,deleteWish}) {


    return (
       <div className='main'>
         <Link to="/">back</Link>
        {
         wishListArr?.map(country=><div className='cards' key={country.capital}>
          <Details country={country}/>         
          <Card sx={{ maxWidth: 345 }}>
            <CardActions>
              <Button size="small" onClick={()=>{deleteWish(country.capital)}} >remove</Button>
            </CardActions>
          </Card>
        </div>)
       }          
        </div>
    )
}
