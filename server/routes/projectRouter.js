require('dotenv').config();
const router = require('express').Router();
const { Project } = require('../db/models')

router.post('/addNew', async (req, res) => {
  const { newProjectInfo, id } = req.body
  try {
    const newProject = await Project.create({ name: newProjectInfo.name, type: newProjectInfo.type, userId: id })
    return res.json(newProject)
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).end()

  }
})

router.get('/all:id', async (req, res) => {
  const { id } = req.params
  try {
    const listOfProjects = await Project.findAll({ where: { userId: id } })
    return res.status(201).json(listOfProjects)
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
})

router.get('/current:id', async (req, res) => {
  const { id } = req.params
  try {
    const currentProject = await Project.findOne({ where: { id } })
    return res.status(201).json(currentProject)
  } catch (err) {
    console.log(err);
    return res.sendStatus(500)
  }
})

module.exports = router
