import React from 'react'
import {imgs} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from './CarouselEffect.module.css'
const CarouselEffect = () => {
  return (
    <div>
          <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
          >
              {
                  imgs.map((imageItemLink) => {
                      return <img src={imageItemLink}/>
                  })
             }
              
          </Carousel>
          <div className={classes.hero__img}>
              hdsj
          </div>
    </div>
  )
}

export default CarouselEffect
