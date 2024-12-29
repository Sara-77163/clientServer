const express = require("express")
const router = express.Router()
const { pepole } = require("../data")
router.get("/", (req, res) => {
    res.json(pepole)
})
router.get("/:id", (req, res) => {
    const { id } = req.params
    const person = pepole.find(p => Number(id) === p.id)
    res.json(person)
})
router.post("/create", (req, res) => {
    const { id, name, age, city } = req.body
    const new_pepole = [...pepole, { id, name, age, city }];
    res.json(new_pepole)
})
router.put("/update", (req, res) => {
    const { id, name, age, city } = req.body
    const new_pepole = pepole.map(p => {
        if (p.id === Number(id))
            return { id, name, age, city }
        return p
    })
    res.json(new_pepole)
})
router.delete("/delete", (req, res) => {
    const { id } = req.body
    const new_pepole = pepole.filter(p => !(Number(id) === p.id))
    res.json(new_pepole)
})

module.exports = router