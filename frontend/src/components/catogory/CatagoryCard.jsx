import React from 'react'
import classes from './Catagory.module.css'

const CatagoryCard = ({data}) => {
  return (
    <div className={classes.catagory}>
      <a
        href="
          "
      >
        <span>
          <h2>{data.name}</h2>
        </span>

        
          <img src={data.image} alt=""/>
              <p>Shop now</p>
            
      </a>
    </div>
  );
}

export default CatagoryCard
