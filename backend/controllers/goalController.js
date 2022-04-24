// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req,res) =>{
    res.status(200).json({message: 'Get goals'})
}

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = (req,res) =>{
    // in video 23:47 - !req.body.text
    console.log(req.body)
    if (!req.body.text()) {
        res.status(400).json({message:'pls add a text field'})
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set goals'})
}

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req,res) =>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req,res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}
