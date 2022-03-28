require('dotenv').config();
const router = require('express').Router();
const { Task } = require('../db/models')

router.post('/addNew', async (req, res) => {
  const { newTaskInfo, id } = req.body
  try {
    const newTask = await Task.create({ name: newTaskInfo, status: 'execute', projectId: id })
    return res.json(newTask)
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).end()

  }
})

router.get('/getExecute:id', async (req, res) => {
  const { id } = req.params
  try {
    const allNewTasks = await Task.findAll({ where: { projectId: id, status: "execute" } })
    return res.json(allNewTasks)
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).end()
  }
})

module.exports = router
