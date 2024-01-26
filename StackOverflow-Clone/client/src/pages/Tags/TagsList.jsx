import React from 'react'
import "./Tags.css";
import withWeatherLogic from "../Weather";


const TagsList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default withWeatherLogic(TagsList)