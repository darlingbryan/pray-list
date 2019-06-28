import React, { useState, useContext } from 'react'
import PrayerContext from '../../context/prayer/prayerContext'

const PrayerFilter = () => {
  const { filterPrayers, clearFilters } = useContext(PrayerContext)
  const [text, setText] = useState('')

  const onChange = e => {
    if (e.target.value) {
      setText(e.target.value)
      filterPrayers(text)
    } else {
      clearFilters()
    }
  }

  return (
    <form>
      <input type='text' placeholder='Filter Contacts' onChange={onChange} />
    </form>
  )
}

export default PrayerFilter
