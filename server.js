const express = require('express');

const app = express();

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
    
})

app.listen(PORT, () => {
    console.log("Server listening on port %d",PORT);
})