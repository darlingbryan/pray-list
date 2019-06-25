import React, { useContext, useState } from 'react'
import PrayerContext from '../../contexts/prayer/prayerContext'

const PrayerForm = () => {
  const { addPrayer } = useContext(PrayerContext)

  const [prayer, setPrayer] = useState({
    name: '',
    description: '',
    answered: true,
    archive: true
  })

  const { name, description, answered, archive } = prayer

  const onChange = e =>
    setPrayer({ ...prayer, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    addPrayer(prayer)
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Add PrayerForm</h2>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={name}
        onChange={onChange}
      />
      <br />
      <input
        type='textarea'
        name='description'
        placeholder='description'
        value={description}
        onChange={onChange}
      />{' '}
      <div>
        <label>
          Is this prayer answered?
          <select name='answered' value={answered} onChange={onChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </label>
        <br />
        <label>
          Archive this prayer item?
          <select name='archive' value={archive} onChange={onChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </label>{' '}
      </div>
      <div>
        <input type='submit' value='Add Prayer' />
      </div>
    </form>
  )
}

export default PrayerForm
