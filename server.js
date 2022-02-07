const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

const mockUserData = [
    { name: 'Mark'},
    { name: 'Jill'}
]

app.get("/users", (req, res) => {
    res.json(
        {
            success: true,
            message: 'Successfuly got users. Nice!',
            users: mockUserData
        });
});

app.get("/users/:id", (req, res) => {
    let { id } = req.params;

    res.json({
        success: true,
        message: 'Successfuly got one user',
        user: id
    });

});

app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const mockUsername="billyTheKid";
 	const mockPassword="superSecret";

     if(username === mockUsername && password === mockPassword) {
        res.status(200).json({
            success: true,
            message: 'password and username match',
            token: 'encoded token goes here'
        })

        return;
     }

     res.status(404).json({
        success: false,
        message: 'password and username do not match'
     });
})

app.listen(PORT, () => {
    console.log("Server listening on port %d",PORT);
})