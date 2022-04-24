const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    // in video 23:47 - !req.body.text 
    // but since req.body.text mean they have key that is text
    // can use alternative from https://stackoverflow.com/questions/42921727/how-to-check-req-body-empty-or-not-in-node-express
    // for universal purpose
    if (!req.body.text) {
        // if (!Object.keys(req.body).length) {
        // res.status(400).json({message:'pls add a text field'})
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json({
        message: 'Set goals'
    })
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    // res.status(200).json({
    //     message: `Update goal ${req.params.id}`
    // })
    res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()

    // res.status(200).json({
    //     message: `Delete goal ${req.params.id}`
    // })
    res.status(200).json({
        id: req.params.id
    })

})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}