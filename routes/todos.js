import express from 'express'

const router = express.Router()

// Default todos
let todos = [
    {
        id: 1,
        title: "Clean",
        category: "Home",
        complete: false
    },
    {
        id: 2,
        title: "Homework",
        category: "School",
        complete: false
    },
    {
        id: 3,
        title: "Laundry",
        category: "Home",
        complete: false
    }
]

// const findObjectIndex = (arr) => {
//     const index = arr.findIndex((obj) => {obj.id === id})
// }

// all routes start with /todos

// GET todos
router.get('/', (req, res) => {
    res.send(todos)
})

// POST adds new todo to todos
router.post('/addTodo', (req, res) => {
    const todo = req.body
    let newId = (todos.length + 1)
    const newTodo = {id: newId, ...todo, complete: false}
    todos.push(newTodo)
    res.send(`Todo item with the title: ${todo.title} was added to the database!`)
})

// PUT edits todo


// DELETE todo
// router.delete('/delete/:todoId', (req, res) => {
//     const { todoId }  = req.params
//     todos = todos.filter(todo) => todo.id !== todoId
//     res.send(`Todo with the id: ${todoId} was deleted from the database`)
// })

// GET todos for a specific category
router.get('/:category', (req, res) => {
    const category = req.params.category
    const foundCategory = todos.filter((todo) => {
        return todo.category === category
    })
    res.send(foundCategory)
})

export default router