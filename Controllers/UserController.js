let users = [
    {id: 1, name: "Ali Raza", age: 21},
    {id: 2, name: "Ali Hassan", age: 21},
    {id: 3, name: "Hassan Raza", age: 21},
    {id: 4, name: "Razzaq", age: 21},
    {id: 5, name: "Anzar Hussain", age: 21},
    {id: 6, name: "Kamran", age: 21},
    {id: 7, name: "Atif Shah", age: 21},
];

const index = (req, res) => {
    res.send(users);
}

const show = (req, res) => {
    res.send({
        ID_in_path: req.params.id,
        user: users.find(user => user.id === parseInt(req.params.id))
    });
}

const add = (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.query.name,
        age: req.query.age
    }

    users.push(user);
    res.send({
        message: "User has been successfully created",
        user
    })
}

module.exports = {
    index, show, add
}