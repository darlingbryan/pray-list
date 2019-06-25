import React, { Fragment, useContext } from 'react'
import PrayerContext from '../../contexts/prayer/prayerContext'
import PrayerItem from './PrayerItem'

const Prayers = () => {
  const { prayers, filtered } = useContext(PrayerContext)

  let showPrayer

  if (filtered === null) {
    showPrayer = prayers
  } else {
    showPrayer = filtered
  }
  return (
    <Fragment>
      {showPrayer.map(prayer => (
        <PrayerItem key={prayer.id} prayer={prayer} />
      ))}
    </Fragment>
  )
}

export default Prayers
