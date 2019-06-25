import React from 'react'
import PropTypes from 'prop-types'

const PrayerItem = ({ prayer }) => {
  const { name, description, answered, archive } = prayer
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        <li>Answered: {answered ? 'Yes' : 'No'}</li>
        <li>Archive: {archive ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  )
}

PrayerItem.propTypes = {
  prayer: PropTypes.object.isRequired
}

export default PrayerItem
