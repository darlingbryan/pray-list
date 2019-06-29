import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PrayerContext from '../../context/prayer/prayerContext'

const PrayerItem = ({ prayer }) => {
  const { name, description, answered, archive, _id } = prayer

  const { deletePrayer, setCurrent } = useContext(PrayerContext)

  const onDelete = () => {
    deletePrayer(_id)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        <li>Answered: {answered ? 'Yes' : 'No'}</li>
        <li>Archive: {archive ? 'Yes' : 'No'}</li>
      </ul>
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => setCurrent(prayer)}>Edit</button>
    </div>
  )
}

PrayerItem.propTypes = {
  prayer: PropTypes.object.isRequired
}

export default PrayerItem
