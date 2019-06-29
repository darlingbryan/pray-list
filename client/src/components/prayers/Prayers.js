import React, { Fragment, useContext, useEffect } from 'react'
import PrayerContext from '../../context/prayer/prayerContext'
import PrayerItem from './PrayerItem'

const Prayers = () => {
  const { prayers, filtered, getPrayer } = useContext(PrayerContext)

  useEffect(() => {
    getPrayer()
    // eslint-disable-next-line
  }, [])

  let showPrayer

  if (filtered === null) {
    showPrayer = prayers
  } else {
    showPrayer = filtered
  }
  return (
    <Fragment>
      {showPrayer.map(prayer => (
        <PrayerItem key={prayer._id} prayer={prayer} />
      ))}
    </Fragment>
  )
}

export default Prayers
