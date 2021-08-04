import React from 'react'
import './card.styles.css'
export const Card = (props) => {
  const monster = props.monster
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      ></img>
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}
