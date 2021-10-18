# 3760-nodejs-api-server

## Todo Endpoints

### GET
**/todos**
Returns all current saved todos in JSON format

### POST
**/todos/addTodo**
Adds a new todo item. When creating the new todo, you only need to give it the key value pairs of "title" and "category" as strings. The id and the complete keys will be completed automatically.
#### Example
```
Request:
{
    "title": "Mow the lawn",
    "category": "Home"
}
Response:
{
    "id": 4,
    "title": "Mow the lawn",
    "category": "Home",
    "complete": false
}
Todo item with the title: Mow the lawn was added to the database!
```

### PUT
(work in progress)

### DELETE
**/todos/deleteTodo/{id}**
Removes a todo item with the id specified in the endpoint
#### Example
```
Current list of todos:
{
    "id": 1,
    "title": "Clean",
    "category": "Home",
    "complete": false
},
{
    "id": 2,
    "title": "Homework",
    "category": "School",
    "complete": false
},
{
    "id": 3,
    "title": "Laundry",
    "category": "Home",
    "complete": false
}
/todos/deleteTodo/2
New list of todos:
{
    "id": 1,
    "title": "Clean",
    "category": "Home",
    "complete": false
},
{
    "id": 3,
    "title": "Laundry",
    "category": "Home",
    "complete": false
}
Todo item with the id: 2 was deleted from the database
```

### GET todos from a specific category
**/todos/{category}**
Returns all todos in the specified category

---

## Category Endpoints

### GET
**/categories**
Returns all current saved categories in JSON format

### POST
**/todos/addCategory**
Adds a new category. When creating the new category, you only need to give it the key value pair of "category" as a string. The id will be completed automatically.
#### Example
```
Request:
{
    "category": "Personal"
}
Response:
{
    "id": 4,
    "category": "Personal"
}
A new category: Personal was added to the database!
```

### PUT
(work in progress)

### DELETE
**/todos/deleteCategory/{id}**
Removes a category with the id specified in the endpoint
#### Example
```
Current list of categories:
{
    "id": 1,
    "category": "Home"
},
{
    "id": 2,
    "category": "School"
},
{
    "id": 3,
    "category": "Work"
}
/todos/deleteCategory/2
New list of categories:
{
    "id": 1,
    "category": "Home"
},
{
    "id": 3,
    "category": "Work"
}
Category with the id: 2 was deleted from the database
```