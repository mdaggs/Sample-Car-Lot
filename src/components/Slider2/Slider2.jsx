
import React, { useState } from 'react'
import { Button, Card, CardMedia, CardActions, CardContent, Typography } from '@mui/material'

export default function Slider2(props) {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== props.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === props.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(props.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

  return (
      <Card>
        <CardMedia
          component="img"
          height="175"
          image={props.image}
          alt={props.heading}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            test
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Get in Touch!</Button>
          <Button size="small">Specs</Button>
        </CardActions>
      </Card>
  )
}