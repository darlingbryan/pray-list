const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const Prayer = require('../models/Prayer')
const auth = require('../middleware/auth')

//@route        GET api/prayers
//@desc         Get all user's prayerlist
//@access       Private
router.get('/', auth, async (req, res) => {
  try {
    const prayers = await Prayer.find({ user: req.user.id }).sort({
      date: -1
    })
    res.json(prayers)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route        POST api/prayers
//@desc         Add new prayer
//@access       Private

router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, description, answered, archive } = req.body

    try {
      const newPrayer = new Prayer({
        name,
        description,
        answered,
        archive,
        user: req.user.id
      })
      const prayer = await newPrayer.save()

      res.json(prayer)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

//@route        PUT api/prayers/:id
//@desc         Update prayer
//@access       Private
router.put('/:id', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const { name, description, answered, archive } = req.body

  const prayerFields = {}
  if (name) prayerFields.name = name
  if (description) prayerFields.description = description
  if (answered) prayerFields.answered = answered
  if (archive) prayerFields.archive = archive

  try {
    let prayer = await Prayer.findById(req.params.id)

    if (!prayer) return res.status(404).json({ msg: 'Prayer not found.' })

    if (prayer.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Authentication required.' })

    prayer = await Prayer.findByIdAndUpdate(
      req.params.id,
      { $set: prayerFields },
      { new: true }
    )

    res.json(prayer)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route        DELETE api/prayers/:id
//@desc         Delete prayer
//@access       Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const prayer = await Prayer.findById(req.params.id)

    if (!prayer) return res.status(404).json({ msg: 'Prayer not found.' })

    if (prayer.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Authentication required.' })

    await Prayer.findByIdAndRemove(req.params.id)

    res.json('Contact removed.')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
