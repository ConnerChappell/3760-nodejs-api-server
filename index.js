import express from 'express'
import bodyParser from 'body-parser'

import todosRoutes from './routes/todos.js'
import categoriesRoutes from './routes/categories.js'

const app = express()
const PORT = 8000

app.use(bodyParser.json())

app.use('/todos', todosRoutes)
app.use('/categories', categoriesRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Homepage.')
})

app.listen(PORT, () => { 
    console.log(`Server running on port: http://localhost:${PORT}`)
})