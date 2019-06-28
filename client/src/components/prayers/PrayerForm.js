import React, { useContext, useState, useEffect } from 'react'
import PrayerContext from '../../context/prayer/prayerContext'

const PrayerForm = () => {
  const { addPrayer, current, updatePrayer, clearCurrent } = useContext(
    PrayerContext
  )

  const [prayer, setPrayer] = useState({
    name: '',
    description: '',
    answered: false,
    archive: false
  })

  const { name, description, answered, archive } = prayer

  useEffect(() => {
    if (current !== null) {
      setPrayer(current)
    } else {
      setPrayer({
        name: '',
        description: '',
        answered: false,
        archive: false
      })
    }
  }, [current])

  const onChange = e =>
    setPrayer({ ...prayer, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addPrayer(prayer)
    } else {
      updatePrayer(prayer)
    }

    setPrayer({
      name: '',
      description: '',
      answered: false,
      archive: false
    })
  }

  const onClear = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Update Prayer' : 'Add Prayer'}</h2>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={name}
        required
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
      {current ? (
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
      ) : (
        ' '
      )}
      <div>
        <input type='submit' value={current ? 'Update Prayer' : 'Add Prayer'} />
      </div>
      {current ? <button onClick={onClear}>Back to Add Prayers</button> : ' '}
    </form>
  )
}

export default PrayerForm
