import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Details({country}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={country.flags.svg}
      alt="flag"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {country.name.common}
      </Typography>
    </CardContent>
   </Card>
  )
}
