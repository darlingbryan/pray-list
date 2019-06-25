import React from 'react'
import Prayers from '../prayers/Prayers'
import PrayerForm from '../prayers/PrayerForm'
import PrayerFilter from '../prayers/PrayerFilter'

const Home = () => {
  return (
    <div>
      <PrayerFilter />
      <PrayerForm />
      <Prayers />
    </div>
  )
}

export default Home
