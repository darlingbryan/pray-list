import React, { Fragment, useContext } from 'react'
import PrayerContext from '../../contexts/prayer/prayerContext'
import PrayerItem from './PrayerItem'

const Prayers = () => {
  const { prayers } = useContext(PrayerContext)
  return (
    <Fragment>
      {prayers.map(prayer => (
        <PrayerItem key={prayer.id} prayer={prayer} />
      ))}
    </Fragment>
  )
}

export default Prayers
