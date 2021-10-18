import express from 'express'

const router = express.Router()

// Default categories
let categories = [
    {
        id: 1,
        category: "Home"
    },
    {
        id: 2,
        category: "School"
    },
    {
        id: 3,
        category: "Work"
    }
]

// all routes start with /categories

// GET categories
router.get('/', (req, res) => {
    res.send(categories)
})

// POST adds new category to categories
router.post('/addCategory', (req, res) => {
    const category = req.body
    let newId = (categories.length + 1)
    const newCategory = {id: newId, ...category}
    categories.push(newCategory)
    res.send(`A new category: ${category.category} was added to the database!`)
})

// PUT edits category


// DELETE category
router.delete('/deleteCategory/:categoryId', (req, res) => {
    const { categoryId } = req.params
    const index = categories.findIndex((obj) => obj.id === categoryId)
    categories.splice(index - 1, 1)
    res.send(`Category with the id: ${categoryId} was deleted from the database`)
})

export default router