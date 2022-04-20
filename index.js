const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send(' Hello world this is a node project .')
})

const users = [
    { id: 1, name: 'sakib', email: 'sakib@gmail.com', phone: '0173423333' },
    { id: 2, name: 'tamim', email: 'tamim@gmail.com', phone: '0173423333' },
    { id: 3, name: 'musfiq', email: 'musfiq@gmail.com', phone: '0173423333' },
    { id: 4, name: 'saifuddin', email: 'saifuddin@gmail.com', phone: '0173423333' },
    { id: 5, name: 'rubel', email: 'rubel@gmail.com', phone: '0173423333' },
    { id: 6, name: 'riyad', email: 'riyad@gmail.com', phone: '0173423333' },
    { id: 7, name: 'mossadak', email: 'mossadak@gmail.com', phone: '0173423333' },
]



app.get('/users', (req, res) => {
    // console.log('quary', req.query);
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)

})



app.get('/fruits/fruit', (get, res) => {
    res.send(['mangos', 'apple', 'oranges', 'banana'])
})

app.listen(port, () => {
    console.log('listining to port', port);
})