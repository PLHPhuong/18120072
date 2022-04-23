// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req,res) =>{
    res.status(200).json({message: 'Get goals'})
}

// @desc Set goals
// @route PUT /api/goals
// @access Private
const SetGoals = (req,res) =>{
    res.status(200).json({message: 'Get goals'})
}
module.exports = {
    getGoals,
}