import React from 'react'
import { Grid } from '@mui/material'
import MainCard from './MainCard'
import Slider from './Slider/Silder'
// import Slider2 from './Slider2/Slider2'
import chevy1 from './img/chevy1.png'
import chevy2 from './img/chevy2.jpeg'
import ford1 from './img/ford1.jpeg'
import ford2 from './img/ford2.jpeg'


// https://github.com/Ziratsu/slider-react

export default function MainContainer() {

  const data = [
    {id:1, image: ford1, heading:"Ford1 Heading", description: "Ford 1 test description"},
    {id:2, image: ford2, heading:"Ford2 Heading", description: "Ford 2 test description"},
    {id:3, image: chevy1, heading:"Chevy1 heading", description: "Chevy 1 test description"},
    {id:4, image: chevy2, heading:"Chevy2 heading", description: "Chevy 2 test description"},
  ]

  return (
    <main>

      <Grid container spacing={2}>
        {
          data.map((payload) => {
            return (
              <Grid item xs={6}>
                <MainCard key={payload.id}
                          image={payload.image}
                          heading={payload.heading}
                          description={payload.description}
                />
                <Slider />
              </Grid>
            )
          })
        }
      </Grid>

      <Slider />

    </main>
  )
}
