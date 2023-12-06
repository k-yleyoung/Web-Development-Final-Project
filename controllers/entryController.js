const Entry = require('../models/Entry')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// GET
const getAllEntrys = asyncHandler(async (req, res) => {
    // Get all notes from MongoDB
    const entrys = await Entry.find().lean()

    // If no notes 
    if (!entrys?.length) {
        return res.status(400).json({ message: 'No Entrys found' })
    }

    // Add username to each note before sending the response 
    const entrysWithUser = await Promise.all(entrys.map(async (entry) => {
        const user = await User.findById(entry.user).lean().exec()
        return { ...entry, username: user.username }
    }))

    res.json(entrysWithUser)
    
})

// POST
const createNewEntry = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body

    // Confirm data
    if (!user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Entry.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate entry title' })
    }

    // Create and store the new user 
    const entry = await Entry.create({ user, title, text })

    if (entry) { // Created 
        return res.status(201).json({ message: 'New entry created' })
    } else {
        return res.status(400).json({ message: 'Invalid entry data received' })
    }

})

//PATCH
const updateEntry = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body

    // Confirm data
    if ( !user || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm entry exists to update
    const entry = await Entry.findById(id).exec()

    if (!entry) {
        return res.status(400).json({ message: 'Entry not found' })
    }

    // Check for duplicate title
    const duplicate = await Entry.findOne({ title }).lean().exec()

    // Allow renaming of the original entry 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate entry title' })
    }

    note.user = user
    note.title = title
    note.text = text

    const updatedNote = await note.save()

    res.json(`'${updatedNote.title}' updated`)
})

//DELETE
const deleteEntry = asyncHandler(async (req, res) => {
    const { title } = req.body

    // Confirm data
    if (!title) {
        return res.status(400).json({ message: 'Entry ID required' })
    }

    // Confirm entry exists to delete 
    const entry = await Entry.findById(id).exec()

    if (!entry) {
        return res.status(400).json({ message: 'Entry not found' })
    }

    const result = await entry.deleteOne()

    const reply = `Entry '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})





module.exports = {
    getAllEntrys,
    createNewEntry,
    updateEntry,
    deleteEntry
}