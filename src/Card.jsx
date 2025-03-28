import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-purple dib br3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card


